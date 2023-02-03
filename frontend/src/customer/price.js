import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAmount, minusAmount } from "./store";
import { Table } from "react-bootstrap";

function Price({ id }) {
  const [value, setValue] = useState(0);

  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  if (state.cart[id].amount === 0) {
    return <div></div>;
  } else {
    // return (
    //   <div className="food">
    //     <Link to={`/detail/${id}`}>
    //       <img className="food_img" src={state.cart[id].image} alt="" />
    //     </Link>
    //
    //     <div text="text">
    //       <div className="food_info">
    //         <p className="food_name">{state.cart[id].name}</p>
    //         <div className="button_container">
    //           <button
    //             onClick={() => {
    //               dispatch(minusAmount(id));
    //             }}
    //           >
    //             -
    //           </button>
    //           <small>수량 </small>
    //           <small>{state.cart[id].amount}</small>
    //           <button
    //             onClick={() => {
    //               dispatch(addAmount(id));
    //             }}
    //           >
    //             +
    //           </button>
    //         </div>
    //
    //         <p className="food_price">
    //           <small>가격</small>
    //           <strong>{state.cart[id].amount * state.cart[id].price}</strong>
    //           <small>원 </small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // );
    return (
      <div>
        <Table>
          {state.cart[id].amount === 0 ? null : (
            <tbody>
              <tr>
                <td>{state.cart[id].id}</td>
                <td>{state.cart[id].name}</td>
                <td>{state.cart[id].price * state.cart[id].amount}</td>
                <td>
                  <div className="button_container">
                    <button
                      onClick={() => {
                        dispatch(minusAmount(id));
                      }}
                    >
                      -
                    </button>
                    <small>수량 </small>
                    <small>{state.cart[id].amount}</small>
                    <button
                      onClick={() => {
                        dispatch(addAmount(id));
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          )}
        </Table>
      </div>
    );
  }
}

export default Price;

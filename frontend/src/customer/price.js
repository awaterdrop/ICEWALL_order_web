import { useDispatch, useSelector } from "react-redux";
import { addAmount, minusAmount, deleteProduct } from "./store";
import "./price.css";

function Price({ id }) {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  // if (state.cart[id].amount === 0) {
  //   return <div></div>;
  // } else {
  //   return (
  //     <div>
  //       <Table>
  //         {state.cart[id].amount === 0 ? null : (
  //           <tbody>
  //             <tr>
  //               <td>{state.cart[id].name}</td>
  //               <td>{state.cart[id].price * state.cart[id].amount}</td>
  //               <td>
  //                 <div className="button_container">
  //                   <button
  //                     onClick={() => {
  //                       dispatch(minusAmount(id));
  //                     }}
  //                   >
  //                     -
  //                   </button>
  //                   <small>수량 </small>
  //                   <small>{state.cart[id].amount}</small>
  //                   <button
  //                     onClick={() => {
  //                       dispatch(addAmount(id));
  //                     }}
  //                   >
  //                     +
  //                   </button>
  //                 </div>
  //               </td>
  //               <td>
  //                 <button
  //                   onClick={() => {
  //                     dispatch(deleteProduct(id));
  //                   }}
  //                 >
  //                   삭제
  //                 </button>
  //               </td>
  //             </tr>
  //           </tbody>
  //         )}
  //       </Table>
  //     </div>
  //   );
  // }

  return (
    <>
      {state.cart[id].amount === 0 ? null : (
        <div className="price">
          <div className="product_name">{state.cart[id].name}</div>
          <div className="product_price">
            {state.cart[id].price * state.cart[id].amount}
          </div>

          <div className="button_container">
            <button
              onClick={() => {
                dispatch(minusAmount(id));
              }}
            >
              -
            </button>

            <div className="product_amount">수량 </div>
            <div className="product_amount">{state.cart[id].amount}</div>
            <button
              onClick={() => {
                dispatch(addAmount(id));
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                dispatch(deleteProduct(id));
              }}
            >
              삭제
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Price;

import { useDispatch, useSelector } from "react-redux";
import { addAmount, minusAmount, deleteProduct } from "./store";
import "./price.css";

function Price({ id }) {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <>
      {state.cart[id].amount === 0 ? null : (
        <div className="price">
          <div className="price_title">
            <div className="product_name">{state.cart[id].name}</div>
            <div className="product_price">
              {state.cart[id].price * state.cart[id].amount}원
            </div>
          </div>

          <div className="button_container">
            {/*<div className="product_amount">수량 </div>*/}
            <div className="change_amount">
              <button
                onClick={() => {
                  dispatch(minusAmount(id));
                }}
              >
                -
              </button>
              <div>{state.cart[id].amount}</div>
              <button
                onClick={() => {
                  dispatch(addAmount(id));
                }}
              >
                +
              </button>
            </div>
            <button
              className="delete"
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

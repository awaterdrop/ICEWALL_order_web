import { useSelector } from "react-redux";

function Price({ id }) {
  let state = useSelector((state) => {
    return state;
  });

  return (
    <>
      {state.cart[id].receiptAmount === 0 ? null : (
        <div className="price">
          <div className="product_name">{state.cart[id].name}</div>
          <div>{state.cart[id].receiptAmount}개</div>
          <div className="product_price">
            {state.cart[id].price * state.cart[id].receiptAmount}원
          </div>
        </div>
      )}
    </>
  );
}

export default Price;

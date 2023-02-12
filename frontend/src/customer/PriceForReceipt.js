import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Price({ id }) {
  const [value, setValue] = useState(0);

  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

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

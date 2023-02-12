import Header from "../components/header/Header";

import { useSelector } from "react-redux";

import React from "react";
import PriceForReceipt from "./PriceForReceipt";

function Receipt() {
  let state = useSelector((state) => {
    return state;
  });

  let totalPrice = 0;
  for (let i = 0; i < state.cart.length; i++) {
    totalPrice += state.cart[i].receiptAmount * state.cart[i].price;
  }

  return (
    <div>
      <Header />
      <div>
        <div>상품명</div>
        <div>상품가격</div>

        <div className="cart">
          {state.cart.map((a, i) => (
            <PriceForReceipt id={i} key={i} />
          ))}
        </div>
        <h3>총가격:{totalPrice}</h3>
      </div>
    </div>
  );
}
export default Receipt;

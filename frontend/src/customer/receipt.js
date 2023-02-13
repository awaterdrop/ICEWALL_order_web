import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import "./receipt.css";
import React, { useEffect } from "react";
import PriceForReceipt from "./PriceForReceipt";
import { setCart } from "./store";

function Receipt() {
  let state = useSelector((state) => {
    return state;
  });

  let totalPrice = 0;
  for (let i = 0; i < state.cart.length; i++) {
    totalPrice += state.cart[i].receiptAmount * state.cart[i].price;
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, []);
  return (
    <div>
      <Header />
      <h1 className="h1">주문내역</h1>
      <div>
        <div className="receipt_title">
          <div>상품명</div>
          <div>상품개수</div>
          <div>상품가격</div>
        </div>
        <hr />
        <div className="cart">
          {state.cart.map((a, i) => (
            <PriceForReceipt id={i} key={i} />
          ))}
        </div>
        <h3 className="total">총가격: {totalPrice}원</h3>
      </div>
    </div>
  );
}
export default Receipt;

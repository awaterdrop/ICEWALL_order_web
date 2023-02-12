import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import Price from "./price";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
function Cart() {
  const navigate = useNavigate();
  const clickCart = () => {
    navigate("/cart");
  };
  const clickMenu = () => {
    navigate("/menu");
  };
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch;
  let sum = 0;
  for (let i = 0; i < state.cart.length; i++) {
    sum += state.cart[i].amount * state.cart[i].price;
  }
  return (
    <>
      <div className="cart">
        <h1>장바구니</h1>
        <hr />
        <div className="product">
          {state.cart.map((a, i) => (
            <Price id={i} key={i} />
          ))}
        </div>
        <h3 className="total_price">총가격: {sum}</h3>
        <button className="button_order">주문하기</button>
        <button className="button_order" onClick={clickMenu}>
          상품 더 담으러 가기
        </button>
      </div>
    </>
  );
}

export default Cart;

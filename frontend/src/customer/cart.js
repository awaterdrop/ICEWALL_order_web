import React from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import Price from "./price";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { totalPrice } from "./store";
import "./cart.css";

function Cart() {
  const navigate = useNavigate();
  const clickCart = () => {
    navigate("/cart");
  };
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch;

  return (
    <div>
      <Header />
      {/*<Table className="top">*/}
      {/*  <thead>*/}
      {/*    <tr>*/}
      {/*      <th>#</th>*/}
      {/*      <th>상품명</th>*/}
      {/*      <th>상품가격</th>*/}
      {/*      <th>변경하기</th>*/}
      {/*    </tr>*/}
      {/*  </thead>*/}
      {/*</Table>*/}
      <div className="cart">
        {/*  {products.map((product) => (*/}
        {/*    <Price product={product} key={product.id} />*/}
        {/*  ))}*/}
        {state.cart.map((a, i) => (
          <Price id={i} key={i} />
        ))}
      </div>
      <h3>
        <b>총가격:</b>
        {dispatch(totalPrice())}
      </h3>
      <button>주문하기</button>
    </div>
  );
}

export default Cart;

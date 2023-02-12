import React, { useState } from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import Food from "./food";
import "./menu.css";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";

function Menu() {
  const navigate = useNavigate();

  let state = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <Header />
      <Table>
        <thead>
          <tr>
            <th className="image">상품사진</th>
            <th>상품명</th>
            <th>상품가격</th>
          </tr>
        </thead>
      </Table>
      <div className="menu">
        {/*{products.map((product) => (*/}
        {/*  <Food product={product} key={product.id} />*/}
        {/*))}*/}

        {state.cart.map((a, i) => (
          <Food product={state.cart[i]} id={i} key={i} />
        ))}
      </div>
    </div>
  );
}
export default Menu;

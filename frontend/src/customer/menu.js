import React, { useState } from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import Food from "./food";
import "./menu.css";
import { useDispatch, useSelector } from "react-redux";

function Menu() {
  const navigate = useNavigate();

  let state = useSelector((state) => {
    return state;
  });

  return (
    <div>
      <Header />
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

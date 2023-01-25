import React, { useState } from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import Food from "./food";
import "./menu.css";

function Menu() {
  const navigate = useNavigate();
  const clickFood = () => {
    navigate("/menu/food");
  };
  const clickDrink = () => {
    navigate("/menu/drink");
  };

  return (
    <div>
      <Header />
      <div className="menu">
        <button className="menu_button">메뉴</button>
          <Food id="1" image="img/woodong.jpeg" name="치킨" price={20000}  />
          <Food id="2" image="img/woodong.jpeg" name="마른오징어" price={16000}/>
          <Food id="3" image="img/woodong.jpeg" name="라면" price={5000} />
          <Food id="4" image="img/woodong.jpeg" name="황도" price={20000} />
      </div>
    </div>
  );
}
export default Menu;

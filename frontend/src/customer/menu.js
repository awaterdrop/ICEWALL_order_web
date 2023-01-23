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
        <h1 className="menu_title">MENU</h1>
        <button className="menu_button">메뉴</button>
        <div className="menu_row">
          <Food id="1" name="치킨" price={20000} description="맛있는 치킨" />
          <Food
            id="2"
            name="마른오징어"
            price={16000}
            description="맛있는 오징어"
          />
        </div>
        <div className="menu_row">
          <Food id="3" name="라면" price={5000} description="맛있는 라면" />
          <Food id="4" name="황도" price={20000} description="맛있는 황도" />
        </div>
      </div>
    </div>
  );
}
export default Menu;

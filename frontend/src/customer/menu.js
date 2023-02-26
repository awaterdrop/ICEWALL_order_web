import React from "react";
import HeaderForCustomer from "../components/header/HeaderForCustomer";
import Food from "./food";
import "./menu.css";
import { useSelector } from "react-redux";

function Menu() {
  let state = useSelector((state) => {
    return state;
  });
  const scrollFood = () => {
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  };
  const scrollDrink = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };
  return (
    <>
      <HeaderForCustomer />

      <div className="menu_title">
        <div className="image">상품사진</div>
        <div>상품명</div>
        <div>상품가격</div>
      </div>
      <hr />
      <div className="button_scroll">
        <button onClick={scrollFood}>음식</button>
        <button onClick={scrollDrink}>음료수</button>
      </div>
      <div className="food">
        {state.cart.map((a, i) => (
          <Food product={state.cart[i]} id={i} key={i} />
        ))}
      </div>
    </>
  );
}
export default Menu;

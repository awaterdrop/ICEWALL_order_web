import React from "react";
import "./food.css";
function Food({ id, name, image, price, description }) {
  return (
    <div className="food">
      <div className="food_info">
        <p>{name}</p>
        <p className="food_price">
          <small>가격</small>
          <strong>{price}</strong>
          <small>원</small>
        </p>
      </div>
      <img src={image} alt="" />
      <button>장바구니</button>
      <div className="food_description">
        <small>{description}</small>
      </div>
    </div>
  );
}

export default Food;

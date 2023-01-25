import React, { useState } from "react";
import { Link } from "react-router-dom";
function Price({ product }) {
  const [value, setValue] = useState(0);
  const { id, name, price, image, amount, totalPrice } = product;

  return (
    <div className="food">
      <Link to={`/detail/${id}`}>
        <img className="food_img" src={image} alt="" />
      </Link>

      <div text="text">
        <div className="food_info">
          <p className="food_name">{name}</p>
          <p className="food_price">
            <small>가격</small>
            <strong>{totalPrice}</strong>
            <small>원 </small>
            <small>수량 </small>
            <small>{amount}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Price;

import React, { useState } from "react";
import "./food.css";
function Food({ id, name, image, price, description }) {
  const [value, setValue] = useState(0);

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
      <div className="button_container">
        <button onClick={() => setValue(value - 1)}>-</button>
        <p>수량 : {value}</p>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>

      <div className="food_description">
        <small>{description}</small>
      </div>
    </div>
  );
}

export default Food;

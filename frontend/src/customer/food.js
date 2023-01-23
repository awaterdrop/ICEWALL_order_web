import React, { useState } from "react";
import "./food.css";
function Food({ id, image, name, price}) {
  const [value, setValue] = useState(0);

  return (
    <div className="food">
        <div className="food_img">
            <img src ={image} alt=""/>
        </div>
        <div text="text">
            <div className="food_info">
                <p className="food_name">{name}</p>
                <p className="food_price">
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Food;

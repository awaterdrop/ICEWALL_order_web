import React, { useState } from "react";
import "./food.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function Food({ product }) {
  const { id, name, price, image } = product;

  return (
    <div className="food2">
      <div className="div">
        <Link to={`/detail/${id}`}>
          <img className="food_img" src={image} alt="" />
        </Link>
      </div>

      <div className="name">{name}</div>

      <div>{price}원</div>
    </div>
  );
}

export default Food;

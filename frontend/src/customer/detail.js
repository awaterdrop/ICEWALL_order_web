import React, { useState } from "react";
import Header from "../components/header/Header";
import "./detail.css";
import { useParams } from "react-router-dom";

function Detail({ products }) {
  const [value, setValue] = useState(0);
  const params = useParams();
  const product = products[params.id];
  return (
    <div className="detail">
      <Header />
      <h4 className="detail_name">{product.name}</h4>
      <h4 className="detail_name">{product.price}</h4>
      <img className="detail_img" src={product.image} alt="" />

      <div className="button_container">
        <button onClick={() => setValue(value - 1)}>-</button>
        <p>수량 : {value}</p>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  );
}

export default Detail;

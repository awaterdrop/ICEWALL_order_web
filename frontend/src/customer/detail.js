import React, { useState } from "react";
import Header from "../components/header/Header";
import "./detail.css";
import { useParams } from "react-router-dom";

function Detail({ products }) {
  const params = useParams();
  const product = products[params.id];
  const [value, setValue] = useState(product.amount);
  const [A, setA] = useState(product.totalPrice);
  product.amount = value;
  product.totalPrice = A;
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
      <button onClick={() => setA(product.price * value)}>장바구니 담기</button>
      <h4>total price : {product.price * value}</h4>
    </div>
  );
}

export default Detail;

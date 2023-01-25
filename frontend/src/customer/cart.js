import React from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import Food from "./food";
import Price from "./price";

function Cart({ products }) {
  const navigate = useNavigate();
  const clickCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <Header />
      <div className="cart">
        {products.map((product) => (
          <Price product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Cart;

import React from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const clickCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <Header />
    </div>
  );
}

export default Cart;

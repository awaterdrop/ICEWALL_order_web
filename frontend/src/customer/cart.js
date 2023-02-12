import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import Price from "./price";
import { useSelector } from "react-redux";
import "./cart.css";
import { useEffect } from "react";

function Cart() {
  const navigate = useNavigate();

  const clickBasket = (arr) => {
    // const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    // baskets.push(arr);
    useEffect(() => {
      console.log(arr);
      localStorage.setItem("baskets", JSON.stringify(arr));
    });
  };
  const clickMenu = () => {
    navigate("/menu");
  };
  let state = useSelector((state) => {
    return state;
  });
  let totalPrice = 0;
  for (let i = 0; i < state.cart.length; i++) {
    totalPrice += state.cart[i].amount * state.cart[i].price;
  }
  return (
    <>
      <Header />
      <div className="cart">
        <h1>장바구니</h1>
        <hr />
        <div className="product">
          {state.cart.map((a, i) => (
            <Price id={i} key={i} />
          ))}
        </div>
        <h3 className="total_price">총가격: {totalPrice}</h3>
        <button className="button_basket" onClick={clickBasket(state.cart)}>
          주문하기
        </button>
        <button className="button_order" onClick={clickMenu}>
          상품 더 담으러 가기
        </button>
      </div>
    </>
  );
}

export default Cart;

import React, { useState } from "react";
import Header from "../components/header/Header";
import "./detail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
import { setProduct } from "./store";

function Detail() {
  const params = useParams();

  let state = useSelector((state) => {
    return state;
  });

  let product = state;
  let dispatch = useDispatch();

  let [temp, setTemp] = useState(0);

  return (
    <div className="detail">
      <Header />
      <h4 className="detail_name">{state.cart[params.id].name}</h4>
      <h4 className="detail_name">{state.cart[params.id].price}</h4>
      <img className="detail_img" src={state.cart[params.id].image} alt="" />

      <div className="button_container">
        <button onClick={() => setTemp((temp = temp - 1))}>-</button>
        <p>수량 : {temp}</p>
        <button
          onClick={() => {
            setTemp((temp = temp + 1));
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(setProduct({ id: params.id, amount: temp }));
          setTemp(0);
          alert("장바구니에 담겼습니다");
        }}
      >
        장바구니 담기
      </button>
      <h4>total price :{state.cart[params.id].price * temp}</h4>
    </div>
  );
}

export default Detail;

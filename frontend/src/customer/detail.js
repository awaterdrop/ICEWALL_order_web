import React, { useState } from "react";
import Header from "../components/header/Header";
import "./detail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "./store";

function Detail() {
  const params = useParams();
  const state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  let [temp, setTemp] = useState(0);

  return (
    <div className="detail">
      <Header />
      <h4 className="detail_name">{state.cart[params.id].name}</h4>
      <h4 className="detail_name">{state.cart[params.id].price}</h4>
      <img className="detail_img" src={state.cart[params.id].image} alt="" />

      <div className="button_container">
        <button
          onClick={() => setTemp((preNum) => (preNum <= 0 ? 0 : preNum - 1))}
        >
          -
        </button>
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
        className="button_put"
        onClick={() => {
          dispatch(setProduct({ id: params.id, amount: temp }));
          if (temp === 0) {
            alert("수량을 확인해주세요");
          } else {
            alert("장바구니에 담겼습니다");
          }
          setTemp(0);
        }}
      >
        장바구니 담기
      </button>
      <p className="product_info">이 부분은 음식 설명입니다.</p>
      <h4 className="product_info">
        총 가격 :{state.cart[params.id].price * temp}
      </h4>
    </div>
  );
}

export default Detail;

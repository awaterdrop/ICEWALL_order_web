import React from "react";
import { useNavigate } from "react-router-dom";

function MainAdmin() {
  const navigate = useNavigate();
  const clickServing = () => {
    navigate("/serving");
  };
  const clickCooking = () => {
    navigate("/cooking");
  };
  const clickPay = () => {
    navigate("/pay");
  };
  return (
    <div>
      <button onClick={clickServing}>서빙</button>
      <button onClick={clickCooking}>요리</button>
      <button onClick={clickPay}>결제</button>
    </div>
  );
}

export default MainAdmin;

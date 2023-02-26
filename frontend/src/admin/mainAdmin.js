import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderForAdmin from "../components/header/HeaderForAdmin";
import "./mainAdmin.css";

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
    <>
      <HeaderForAdmin />
      <div className="main_admin">
        <h1>For Admin</h1>
        <div className="admin_buttons">
          <button className="admin_button" onClick={clickServing}>
            서빙
          </button>
          <button className="admin_button" onClick={clickCooking}>
            요리
          </button>
          <button className="admin_button" onClick={clickPay}>
            결제
          </button>
        </div>
      </div>
    </>
  );
}

export default MainAdmin;

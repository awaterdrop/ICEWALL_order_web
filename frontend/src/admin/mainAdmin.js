import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderForAdmin from "../components/header/HeaderForAdmin";
import "./mainAdmin.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logInButton } from "../customer/store";

function MainAdmin() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(
      logInButton({
        id: localStorage.getItem("id"),
        pw: localStorage.getItem("pw"),
      })
    );
  }, [state.user]);

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
        <p> id: {state.user[0].id}</p>
        <p> pw: {state.user[0].pw}</p>
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

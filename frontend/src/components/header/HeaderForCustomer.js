import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
function HeaderForCustomer() {
  const navigate = useNavigate();
  const clickCart = () => {
    navigate("/cart");
  };
  const clickHome = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="home" onClick={clickHome}>
        HOME
      </div>
      <div className="logo">
        <img
          src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_characterMark_basic.png/eec1b339-07cf-41d9-aa4e-87590fea02fe?t=1474077517108"
          alt="학교 로고"
        />
      </div>
      <div className="cart" onClick={clickCart}>
        CART
      </div>
    </div>
  );
}
export default HeaderForCustomer;

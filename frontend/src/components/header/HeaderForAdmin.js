import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
function HeaderForAdmin() {
  const navigate = useNavigate();
  const clickHome = () => {
    navigate("/admin");
  };
  return (
    <div className="header">
      <div className="logo">
        <img
          onClick={clickHome}
          src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_characterMark_basic.png/eec1b339-07cf-41d9-aa4e-87590fea02fe?t=1474077517108"
          alt="학교 로고"
        />
      </div>
      {/*<button>로그아웃</button>*/}
    </div>
  );
}

export default HeaderForAdmin;

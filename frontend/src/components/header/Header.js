import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { AiOutlineHome } from "react-icons/ai";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          class="home_icon"
          src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_characterMark_basic.png/eec1b339-07cf-41d9-aa4e-87590fea02fe?t=1474077517108"
          alt=""
        />
      </Link>
    </div>
  );
}
export default Header;

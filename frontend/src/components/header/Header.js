import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { AiOutlineHome } from "react-icons/ai";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <AiOutlineHome className="home_icon" />
      </Link>
      <div className="header_title">
        <h2>Hanyang Univ CSE 주점</h2>
      </div>
    </div>
  );
}

export default Header;

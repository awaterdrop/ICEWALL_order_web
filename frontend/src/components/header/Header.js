import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"
      />
      <div className="header_title">컴퓨터소프트웨어학부 주문 사이트</div>
    </div>
  );
}

export default Header;

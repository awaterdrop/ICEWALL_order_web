import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Header() {
  const navigate = useNavigate();
  const clickCart = () => {
    navigate("/cart");
  };
  return (
    <div className="header">
      <div className="home">
        <Link to="/">
          <img
            className="home_icon"
            src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_characterMark_basic.png/eec1b339-07cf-41d9-aa4e-87590fea02fe?t=1474077517108"
            alt=""
          />
        </Link>
      </div>
      <div className="cart">
        {/*<Link to="/cart">*/}
        {/*<AiOutlineShoppingCart className="cart_icon" />*/}

        {/*</Link>*/}
        <div onClick={clickCart}>CART</div>
      </div>
    </div>
  );
}
export default Header;

import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import Food from "./food";
import "./menu.css";
import { useSelector } from "react-redux";

function Menu() {
  const navigate = useNavigate();

  let state = useSelector((state) => {
    return state;
  });

  return (
    <div className="menu">
      <Header />
      <div className="title">
        <div className="image">상품사진</div>
        <div>상품명</div>
        <div>상품가격</div>
      </div>

      <div className="food">
        {state.cart.map((a, i) => (
          <Food product={state.cart[i]} id={i} key={i} />
        ))}
      </div>
    </div>
  );
}
export default Menu;

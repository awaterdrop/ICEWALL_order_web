import HeaderForCustomer from "../components/header/HeaderForCustomer";
import { useNavigate } from "react-router-dom";
import Price from "./price";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { deleteProduct, setReceiptProduct, setCart } from "./store";
import { useEffect } from "react";
function Cart() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const clickMenu = () => {
    navigate("/menu");
  };
  const clickReceipt = () => {
    navigate("/receipt");
  };
  let state = useSelector((state) => {
    return state;
  });
  let totalPrice = 0;
  for (let i = 0; i < state.cart.length; i++) {
    totalPrice += state.cart[i].amount * state.cart[i].price;
  }

  useEffect(() => {
    if (totalPrice !== 0) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    } else {
      dispatch(setCart({ data: JSON.parse(localStorage.getItem("cart")) }));
    }
  }, [totalPrice]);
  return (
    <>
      <HeaderForCustomer />
      <div className="cart">
        <h1>장바구니</h1>
        <div className="title">
          <div>상품명</div>
          <div>상품개수</div>
          <div>수량</div>
          <div>변경</div>
        </div>
        <hr />
        <div className="product">
          {state.cart.map((a, i) => (
            <Price id={i} key={i} />
          ))}
        </div>
        <h3 className="total_price">총가격: {totalPrice}원</h3>
        <button
          className="button_order"
          onClick={() => {
            if (totalPrice === 0) {
              alert("장바구니에 물건을 담아주세요");
            } else {
              for (let i = 0; i < state.cart.length; i++) {
                dispatch(setReceiptProduct(i));
                dispatch(deleteProduct(i));
              }

              alert("주문이 되었습니다");
              clickReceipt();
            }
          }}
        >
          주문하기
        </button>
        <button className="button_order" onClick={clickMenu}>
          상품 더 담으러 가기
        </button>
        {/*<button className="button_order" onClick={clickReceipt}>*/}
        {/*  주문내역 보기*/}
        {/*</button>*/}
      </div>
    </>
  );
}

export default Cart;

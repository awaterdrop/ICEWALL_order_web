import "./mainCustomer.css";
import { useNavigate } from "react-router-dom";

function MainCustomer() {
  const navigate = useNavigate();
  const clickMenu = () => {
    navigate("/menu");
  };
  const clickReceipt = () => {
    navigate("/receipt");
  };
  return (
    <div className="mainCustomer">
      <p className="mainCustomer_title">컴소 주점</p>
      <img
        className="mainCustomer_image"
        src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_characterMark_basic.png/eec1b339-07cf-41d9-aa4e-87590fea02fe?t=1474077517108"
        alt=""
      />

      <button onClick={clickMenu} className="mainButton">
        메뉴
      </button>

      <button onClick={clickReceipt} className="mainButton">
        주문내역
      </button>
    </div>
  );
}

export default MainCustomer;

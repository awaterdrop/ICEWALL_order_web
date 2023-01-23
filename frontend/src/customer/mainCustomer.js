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
      <div className="mainCustomer_container">
        <img
          className="mainCustomer_image"
          src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_characterMark_basic.png/eec1b339-07cf-41d9-aa4e-87590fea02fe?t=1474077517108"
          alt=""
        />
        <h1 className="mainCustomer_title">한양대학교<br/>컴소 주점</h1>
      </div>
      <div className="mainCustomer_buttons">
        <button onClick={clickMenu} className="menu_button">
          <h3>MENU</h3>
        </button>
        <button onClick={clickReceipt} className="receipt_button">
          <h3>RECEIPT</h3>
        </button>
      </div>
    </div>
  );
}

export default MainCustomer;

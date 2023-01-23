import "./mainCustomer.css";
import { useNavigate } from "react-router-dom";
// import { QRCodeCanvas } from "qrcode.react";

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
      {/*<QRCodeCanvas value="https://reactjs.org/" />*/}
      <div className="mainCustomer_container">
        <img
          className="mainCustomer_image"
          src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_characterMark_basic.png/eec1b339-07cf-41d9-aa4e-87590fea02fe?t=1474077517108"
          alt=""
        />
        <h3 className="mainCustomer_title"></h3>
      </div>
      <div className="mainCustomer_buttons">
        <button onClick={clickMenu} className="menu_button">
          <h3>메뉴</h3>
        </button>
        <button onClick={clickReceipt} className="receipt_button">
          <h3>주문내역</h3>
        </button>
      </div>
      <img className="qrCode" src="img/qrCode.webp" alt="" />
    </div>
  );
}

export default MainCustomer;

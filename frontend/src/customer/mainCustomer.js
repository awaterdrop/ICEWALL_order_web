import "./customer.css";
import Footer from "../components/footer/Footer";
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
    <div class="mainCustomer">
      <img
        // src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_logo_singlecolor_png.png/b8aabfbe-a488-437d-b4a5-bd616d1577da?t=1474070795276"
        src="https://www.hanyang.ac.kr/documents/20182/73809/HYU_characterMark_basic.png/eec1b339-07cf-41d9-aa4e-87590fea02fe?t=1474077517108"
        className="customerLogo"
      />
      <h1>OO과 주점</h1>
      <div class="container">
        <button onClick={clickMenu} className="menu">
          <h3>MENU</h3>
        </button>
        <button onClick={clickReceipt} className="receipt">
          <h3>RECEIPT</h3>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default MainCustomer;

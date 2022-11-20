import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./customer.css";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const clickFood = () => {
    navigate("/menu/food");
  };
  const clickDrink = () => {
    navigate("/menu/drink");
  };
  return (
    <div class="mainCustomer">
      <Header />
      <h1>
        <br></br>
        <br></br>
        <br></br>MENU
      </h1>
      <div className="container">
        <button onClick={clickFood} class="food">
          <h3>Food</h3>
        </button>
        <button onClick={clickDrink} class="drink">
          <h3>Drink</h3>
        </button>
      </div>

      <Footer />
    </div>
  );
}
export default Menu;

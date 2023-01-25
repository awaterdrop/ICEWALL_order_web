import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import MainCustomer from "./customer/mainCustomer";
import Menu from "./customer/menu";
import Food from "./customer/food";
import Drink from "./customer/drink";
import Detail from "./customer/detail";
import React, { useState } from "react";
import Data from "./customer/data";
import Cart from "./customer/cart";

function App() {
  const [products, setProduct] = useState(Data);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainCustomer />}></Route>

        <Route path="/menu" element={<Menu products={products} />}></Route>

        {/*<Route path="/receipt" element={<Receipt />}></Route>*/}
        <Route path="/receipt" element={<Food />}></Route>
        <Route
          path="/detail/:id"
          element={<Detail products={products} />}
        ></Route>
        <Route path="/cart" element={<Cart products={products} />}></Route>
      </Routes>
    </Router>
  );
}
export default App;

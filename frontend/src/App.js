import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainCustomer from "./customer/mainCustomer";
import Menu from "./customer/menu";
import Detail from "./customer/detail";
import React from "react";
import Cart from "./customer/cart";
import MainAdmin from "./admin/mainAdmin";
import Receipt from "./customer/receipt";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainCustomer />}></Route>

        <Route path="/menu" element={<Menu />}></Route>

        <Route path="/receipt" element={<Receipt />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/admin" element={<MainAdmin />}></Route>
      </Routes>
    </Router>
  );
}
export default App;

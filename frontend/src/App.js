import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainCustomer from "./customer/mainCustomer";
import Menu from "./customer/menu";
import Food from "./customer/food";
import Detail from "./customer/detail";
import React, { useState } from "react";
import Data from "./customer/data";
import Cart from "./customer/cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainCustomer />}></Route>

        <Route path="/menu" element={<Menu />}></Route>

        {/*<Route path="/receipt" element={<Receipt />}></Route>*/}
        <Route path="/receipt" element={<Food />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}
export default App;

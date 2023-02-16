import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainCustomer from "./customer/mainCustomer";
import Menu from "./customer/menu";
import Detail from "./customer/detail";
import React from "react";
import Cart from "./customer/cart";
import Receipt from "./customer/receipt";
import MainAdmin from "./admin/mainAdmin";
import Login from "./admin/login";
import SignUp from "./admin/signUp";
import Serving from "./admin/serving";
import CreateTable from "./admin/createTable";
import Cooking from "./admin/cooking";
import Pay from "./admin/pay";
import End from "./admin/end";

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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/serving" element={<Serving />}></Route>
        <Route path="/createTable" element={<CreateTable />}></Route>
        <Route path="/cooking" element={<Cooking />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/end" element={<End />}></Route>
      </Routes>
    </Router>
  );
}
export default App;

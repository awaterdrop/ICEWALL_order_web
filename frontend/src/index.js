import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import MainCustomer from "./customer/mainCustomer";
import reportWebVitals from "./reportWebVitals";
import Menu from "./customer/menu";
import Receipt from "./customer/receipt";
import Food from "./customer/food";
import Drink from "./customer/drink";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <BrowserView>
      <Router>
        <Routes>
          <Route path="/" element={<MainCustomer />}></Route>

          <Route path="/menu" element={<Menu />}></Route>

          <Route path="/receipt" element={<Receipt />}></Route>
          <Route path="/menu/food" element={<Food />}></Route>
          <Route path="/menu/drink" element={<Drink />}></Route>
          <Route path="/receipt" element={<Receipt />}></Route>
        </Routes>
      </Router>
    </BrowserView>
    <MobileView>
      <Router>
        <Routes>
          <Route path="/" element={<MainCustomer />}></Route>

          <Route path="/menu" element={<Menu />}></Route>

          <Route path="/receipt" element={<Receipt />}></Route>
          <Route path="/menu/food" element={<Food />}></Route>
          <Route path="/menu/drink" element={<Drink />}></Route>
          <Route path="/receipt" element={<Receipt />}></Route>
        </Routes>
      </Router>
    </MobileView>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

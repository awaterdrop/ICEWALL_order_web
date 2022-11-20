import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import MainCustomer from "./customer/mainCustomer";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./customer/menu";
import Receipt from "./customer/receipt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <React.StrictMode>
  //
  //     <MainCustomer />
  //     <Footer />
  //   </React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<MainCustomer />}></Route>

      <Route path="/menu" element={<Menu />}></Route>

      <Route path="/receipt" element={<Receipt />}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

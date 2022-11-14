import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainCustomer from "./customer/mainCustomer";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    {/*<MainCustomer />*/}
    {/*<Footer />*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

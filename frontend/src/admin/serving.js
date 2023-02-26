import React from "react";
import HeaderForAdmin from "../components/header/HeaderForAdmin";
import "./serving.css";
import { useNavigate } from "react-router-dom";

function Serving() {
  const navigate = useNavigate();
  const clickCreateTable = () => {
    navigate("/createTable");
  };
  return (
    <div className="serving">
      <HeaderForAdmin />
      <button className="create_button" onClick={clickCreateTable}>
        Group Create
      </button>
      <div></div>
    </div>
  );
}

export default Serving;

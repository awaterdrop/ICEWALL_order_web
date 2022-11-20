import React from "react";
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;

  return (
    <footer className="footer">
      <p>© {yearTxt} Service - Developed by ICEWALL__6조</p>
      <address>Contact webmaster for more information. 010-9879-1510</address>
    </footer>
  );
};

export default Footer;

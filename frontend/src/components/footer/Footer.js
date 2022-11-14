import React from "react";
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? "2022" : "2022 - " + currentYear;

  return (
    <footer class="m_footer">
      <p>© {yearTxt} Service - Developed by ICEWALL_WEB_6조</p>
    </footer>
  );
};

export default Footer;

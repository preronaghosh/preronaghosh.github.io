import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} | From brain to browser by Prerona 🧠💻
    </footer>
  );
};

export default Footer;

import React from "react";
import Logo from "../images/logo.png";
import "../stylesheets/Header.css";

const Header = () => {
  return (
    <div className="header__box">
      <img src={Logo} alt="Pokemon" className="logo" />
    </div>
  );
};

export default Header;

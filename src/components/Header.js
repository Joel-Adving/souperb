import React from "react";
import "../App.css";
import Welcome from "../pages/Welcome";
import { useSelector } from "react-redux";

function Header() {
  const address = useSelector((state) => state.address);
  return (
    <header>
      <div className="header-items-wrapper"></div>
      <p className="header-p">Nuvarande plats</p>
      <h3 className="header-h3">{address}</h3>
    </header>
  );
}

export default Header;

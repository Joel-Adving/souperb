import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import soup from "../assets/green-soup2.jpeg";
// import soups from "./Soups";

function MenuCard() {
  return (
    <Link className="link-visited" to="/details">
      <div className="menu-card-container">
        <div className="menu-card-img-wrapper">
          <img className="soup-img" src={soup} alt="" />
        </div>
        <div className="soup-info">
          <div className="soup-info-left">
            <div>Ärtig spenatsoppa</div>
            <div>90 Kr</div>
          </div>
          <div className="soup-info-right">
            <div>320 kcal</div>
            <div>20-30 min</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MenuCard;

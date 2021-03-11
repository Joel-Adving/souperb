import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <div className="header2-items-wrapper">
        <h3 className="header2-h3">leveransanvisningar</h3>
      </div>

      <div className="checkout__container">
        <div className="payment__method__container"></div>
        <div className="delivery__adress__container">
          <p>Zlatan</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;

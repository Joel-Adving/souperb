import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const address = useSelector((state) => state.address);
  return (
    <div className="checkout__container">
      <div className="header2-items-wrapper">
        <h3 className="header2-h3">Checkout</h3>
      </div>

      <div className="checkout__main_contet">
        <div className="payment__method">
          <div className="payment__row">
            <h3>Betalmetod</h3>
            <p>change</p>
          </div>
          <div className="payment__row">
            <h3>Leveransadress</h3>
            <p>change</p>
          </div>
          <div>
            {address ? (
              <p style={{ marginLeft: "32px" }}> {address}</p>
            ) : (
              <p style={{ marginLeft: "32px" }}>Testadressgatan 3</p>
            )}
            <p style={{ marginLeft: "32px" }}>111 24</p>
            <p style={{ marginLeft: "32px" }}>stockholm</p>
          </div>
          <div className="payment__row">
            <h3>Leveransalternativ</h3>
          </div>
          <div className="payment__row2">
            <button
              id="toggle1"
              className="cart__button_radio cart-button-toggle"
              onClick={() => {
                let element = document.getElementById("toggle1");
                let element2 = document.getElementById("toggle2");
                element.classList.toggle("button-toggle");
                if ((element2.classList = "button-toggle")) {
                  element2.classList.remove("button-toggle");
                  element2.classList.add("cart__button_radio");
                }
              }}
            >
              Jag hämtar soppan själv
            </button>
          </div>
          <div className="payment__row2">
            <button
              id="toggle2"
              onClick={() => {
                let element = document.getElementById("toggle2");
                let element2 = document.getElementById("toggle1");
                element.classList.toggle("button-toggle");
                if ((element2.classList = "button-toggle")) {
                  element2.classList.remove("button-toggle");
                  element2.classList.add("cart__button_radio");
                }
              }}
              className="cart__button_radio cart-button-toggle button-toggle"
            >
              Jag vill ha soppan hemlevererad
            </button>
          </div>

          <Link
            className="cart-button"
            style={{
              color: "black",
              textDecoration: 0,
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              marginTop: "22px",
              width: "93%",
            }}
            to="/onitsway"
          >
            Lägg beställning
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

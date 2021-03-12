import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import greenSoup from "../assets/green-soup.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

function Details() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div style={{ height: "110vh" }}>
      <div className="details-container">
        <div className="details-container-wrapper">
          <div className="details-soup-image-wrapper">
            <img className="details-img" src={greenSoup} alt="" />
          </div>

          <div className="details-main-content">
            <h2 className="details-header">Ärtig spenatsoppa</h2>
            <div className="details-price-wrapper">
              <h1 className="details-p">90</h1>
              <p className="details-p">SEK</p>
            </div>
            <div className="foodgroup-info">
              <p className="details-p">320 kcal</p>
              <p className="details-p">- vegansk</p>
            </div>
            <h3>Beskrivning</h3>
            <p>
              En riktigt grön och skön soppa, fullproppad med näring. Ärtorna
              bidrar med en söt och len smak till spenatsoppan. Toppad med frön
              för den lyxigare känslan.
            </p>
          </div>
          <div className="cart__div">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => (cart > 0 ? dispatch(decrement()) : 0)}
                className="cart__buttons"
              >
                -
              </button>
              <span className="cart__number">{cart}</span>
              <button
                onClick={() => dispatch(increment())}
                className="cart__buttons"
              >
                +
              </button>
            </div>

            <Link
              className="add__to__cart__button"
              style={{ color: "black", textDecoration: 0 }}
              to="/kundvagn"
            >
              LÄGG TILL I KUNDVAGN
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;

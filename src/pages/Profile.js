import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const address = useSelector((state) => state.address);
  return (
    <div className="profile__container">
      <div className="header2-items-wrapper">
        <h3 className="header2-h3">Profil</h3>
      </div>
      <div className="profile-content-wrapper">
        <div className="profile-content-container">
          <h3 className="profile-name">Johan Svensson</h3>
          <h3>Betalmetod</h3>
          <div className="pay-method">
            <p>**** **** **** 4747</p>
            <button className="profile-button-1">CHANGE</button>
          </div>
          <h3>Leveransadress</h3>
          <div className="dilivery-address">
            <ul>
              <li className="dilivery-address-list-item">Johan Svensson</li>
              <li className="dilivery-address-list-item">{address}</li>
            </ul>
            <button className="profile-button-1">CHANGE</button>
          </div>

          <Link
            className="cart-button"
            style={{
              color: "black",
              textDecoration: 0,
              textAlign: "center",
              marginTop: "1.5em",
              width: "200px",
            }}
            to="/Map"
          >
            Följ din beställning här!
          </Link>
          <button
            style={{
              margin: "0 auto",
              marginTop: "1em",
              marginBottom: "2em",
              width: "120px",
              justifyContent: "center",
              borderRadius: "7px",
            }}
            className="profile-button-2 tips-vän-button"
          >
            TIPSA EN VÄN
          </button>
          <div className="profile-campain-container">
            <h4 className="campain-header">
              Beställ sex soppor till så bjuder vi på den sjätte
            </h4>
            <div className="klippkort">
              <div className="round"></div>
              <div className="round"></div>
              <div className="round"></div>
              <div className="round"></div>
              <div className="round"></div>
              <div className="round"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;

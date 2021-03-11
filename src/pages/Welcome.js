import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useHistory } from "react-router-dom";
import { addAddress } from "../redux/actions";
import { useDispatch } from "react-redux";

function Welcome() {
  const [addressInputValue, setAddressInputValue] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setAddressInputValue(event.target.value);
  };

  const handleOnSubmit = () => {
    dispatch(addAddress(addressInputValue));
    history.push("/meny");
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-h1">Välkommen till Souperb</h1>
      <img className="logo" src={logo} alt="Logo" />
      <form action="" onSubmit={handleOnSubmit}>
        <input
          className="welcome-input"
          value={addressInputValue}
          type="text"
          onChange={handleInputChange}
          placeholder="Skriv in din adress"
        />
      </form>
      <p className="welcome-info">
        För att veta om vi kan leverera till dig, så ber vi dig skriva in din
        adress.
      </p>
      <Link className="welcome-link" to="/meny">
        Har du redan ett konto?
      </Link>
    </div>
  );
}

export default Welcome;

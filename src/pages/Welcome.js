import React from 'react'
import "../App.css"
import {Link} from "react-router-dom"
import logo from "../assets/logo.png"


function Welcome() {
    return (
        <div className="welcome-container">
            <h1 className="welcome-h1">Välkommen till Souperb</h1>
            <img className="logo" src={logo} alt="Logo"/>
            <input className="welcome-input" type="text" placeholder="Skriv in din adress" />
            <p className="welcome-info">För att veta om vi kan leverera till dig, så ber vi dig skriva in din adress.</p>
            <Link className="welcome-link" to="/meny">Har du redan ett konto?</Link>
        </div>
    )
}

export default Welcome

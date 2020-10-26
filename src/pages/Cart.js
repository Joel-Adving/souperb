import React from 'react'
import "../App.css"
import Footer from '../components/Footer'



function Cart() {
    return (
        <div>
            <div className="header2-items-wrapper">
            <h3 className="header2-h3">Varukorg</h3>
            </div>
            <div className="cart-container">
                <div className="cart-wrapper">
                <div className="cart-items">
                <ul>
                    <li>soup1 </li>
                    <li>bread</li>
                    <li>cola</li>
                </ul>
                </div>
                <div className="cost-wrapper">
                    <p>total 159 kr</p>
                    <button className="cart-button">Forstätt till leveransanvisningar</button>
                </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default Cart

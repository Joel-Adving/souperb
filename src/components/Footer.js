import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Footer() {
    return (
        <footer>
            <ul className="footer-ul">
                <li>
                <Link className="footer-li middle-footer-li" to="/meny">HEM</Link>
                </li>
                <li>
                <Link className="footer-li middle-footer-li" to="/kundvagn">KUNDVAGN</Link>
                </li>
                <li>
                <Link className="footer-li middle-footer-li" to="/profil">PROFIL</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer

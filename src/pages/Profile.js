import React from 'react'
import "../App.css"
import Footer from '../components/Footer'


function Profile() {
    return (
        <div>
            <div className="header2-items-wrapper">
            <h3 className="header2-h3">Profil</h3>
            </div>
            <div className="profile-content-wrapper">
            <div className="profile-content-container">
            <h3 className="profile-name">BollenErund</h3>
                <h3>Betalmetod</h3>
                <div className="pay-method">
                    <p>**** **** **** 4747</p>
                    <button className="profile-button-1">CHANGE</button>
                </div>
                <h3>Leveransadress</h3>
                <div className="dilivery-address">
                    <ul>
                        <li className="dilivery-address-list-item">
                            Zlatan Ibrahimovic
                        </li>
                        <li className="dilivery-address-list-item">
                            Brunbärsvägen 8
                        </li>
                    </ul>
                    <button className="profile-button-1">CHANGE</button>
                </div>
                <button className="profile-button-2 följ-leverans-button">Följ din pågående leverans</button>
                <div className="profile-campain-container">
                    <h4 className="campain-header">Beställ sex soppor till så bjuder vi på den sjätte</h4>
                    <div className="klippkort">
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                        <div className="round"></div>
                    </div>
                </div>
                <button className="profile-button-2 tips-vän-button">TIPSA EN VÄN</button>
            </div>
            </div>

            <Footer />
        </div>
    )
}

export default Profile

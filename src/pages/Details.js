import React from 'react'
import "../App.css"
import Footer from '../components/Footer'
import greenSoup from "../assets/green-soup.jpg"


function Details() {
    return (
        <>
            <div className="details-container">
                <div className="details-container-wrapper">
                <div className="details-soup-image-wrapper">
                    <img className="details-img" src={greenSoup} alt=""/>
                </div>

                <div className="details-main-content">
                    <h2 className="details-header">Ärtig spenatsoppa</h2>
                    <div className="details-price-wrapper">
                        <h1 className="details-p">90</h1>
                        <p className="details-p">SEK /Portion</p>
                    </div>
                    <div className="foodgroup-info">
                        <p className="details-p">320 kcsl</p>
                        <p className="details-p">vegan</p>
                    </div>
                    <h3>Beskrivning</h3>
                    <p>En riktigt grön och skön soppa, fullproppad med näring. Ärtorna bidrar med en söt och len smak till spenatsoppan. Toppad med frön för den lyxigare känslan.</p>
                </div>
                </div>
            </div>
        <Footer />
       </>
    )
}

export default Details

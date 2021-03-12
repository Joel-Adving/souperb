import React from "react";
import CampaignCard from "../components/CampaignCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function OnItsWay() {
  const getDivs = () => {
    let divs = [];
    for (var i = 0; i < 6; i++) {
      divs.push(<div className="circlecard"></div>);
    }
    return <div>{divs}</div>;
  };
  return (
    <div style={{ width: "100vw" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <CampaignCard title="Din soppa är nu på väg till dig." />
        <Link
          className="cart-button"
          style={{
            color: "black",
            textDecoration: 0,
            textAlign: "center",
            width: "200px",
          }}
          to="/Map"
        >
          Följ din beställning här!
        </Link>
        <div className="circle__container">
          <h3 style={{ textAlign: "center" }}>
            Vi bjuder vi på den sjätte soppan gratis
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* {getDivs()} */}
            <div
              style={{ backgroundColor: "#2EDE9E", border: "1px solid gray" }}
              className="circlecard"
            ></div>
            <div className="circlecard"></div>
            <div className="circlecard"></div>
            <div className="circlecard"></div>
            <div className="circlecard"></div>
            <div className="circlecard"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OnItsWay;

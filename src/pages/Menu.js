import React from "react";
import CampaignCard from "../components/CampaignCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menucard from "../components/MenuCard";

function Menu() {
  return (
    <div>
      <Header />
      <div className="menu-page-wrapper">
        <CampaignCard />
        <div className="menu-content-container">
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;

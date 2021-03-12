import React from "react";
import "../App.css";

function CampaignCard(props) {
  return (
    <div className="campaign-car-container">
      <h3 className="campaign-h3">{props.title}</h3>
    </div>
  );
}

export default CampaignCard;

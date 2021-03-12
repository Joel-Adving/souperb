import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GoogleMap from "../components/GoogleMap";

function MapScreen() {
  return (
    <div>
      <Header />
      <div>
        <GoogleMap />
      </div>
      <Footer />
    </div>
  );
}

export default MapScreen;

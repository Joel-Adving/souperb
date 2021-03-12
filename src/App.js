import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import DeliveryInstructions from "./pages/DeliveryInstructions";
import OnItsWay from "./pages/OnItsWay";
import MapScreen from "./pages/MapScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/meny" component={Menu} />
        <Route exact path="/kundvagn" component={Cart} />
        <Route exact path="/profil" component={Profile} />
        <Route exact path="/details" component={Details} />
        <Route
          exact
          path="/leveransanvisningar"
          component={DeliveryInstructions}
        />
        <Route exact path="/onitsway" component={OnItsWay} />
        <Route exact path="/map" component={MapScreen} />
      </Switch>
    </Router>
  );
}

export default App;

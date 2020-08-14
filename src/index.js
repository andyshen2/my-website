import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import Projects from "./projects";
import SummerOfTech from "./Components/Summeroftech";
import SpeciesApp from "./Components/Speciesapp";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/app" component={SpeciesApp} />
      <Route exact path="/fergus" component={SummerOfTech} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

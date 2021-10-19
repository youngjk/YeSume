import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Career from "./pages/career";
import Finance from "./pages/finance";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/career" component={Career} />
    <Route pate="/investment" component={Finance} />
  </Router>,
  document.getElementById("root")
);

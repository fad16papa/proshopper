//Meta import
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import "./assets/scss/material-kit-pro-react.scss?v=1.9.0";

//Page import
import LoginPage from "./views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LoginPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

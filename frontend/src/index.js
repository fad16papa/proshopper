//Meta import
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./assets/scss/material-kit-pro-react.scss?v=1.9.0";
import store from "./store";

//Page import
import LoginPage from "./views/LoginPage/LoginPage.js";
import { Provider } from "react-redux";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import HomePage from "./views/HomePage/HomePage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

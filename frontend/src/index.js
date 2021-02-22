//Meta import
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import "./assets/scss/material-kit-pro-react.scss?v=1.9.0";
import store from "./store";

//Page import
import LoginPage from "./views/LoginPage/LoginPage.js";
import { Provider } from "react-redux";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Provider store={store}>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById("root")
);

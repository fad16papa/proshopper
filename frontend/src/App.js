//Meta import
import React, { Fragment } from "react";
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
import HeaderMain from "./components/Header/HeaderMain";

const App = () => {
  return (
    <Router>
      <Fragment>
        <HeaderMain />
        <main>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </main>
      </Fragment>
    </Router>
  );
};

export default App;

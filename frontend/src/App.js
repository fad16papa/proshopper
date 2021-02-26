//Meta import
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/material-kit-pro-react.scss?v=1.9.0";

//Page import
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import HomePage from "./views/HomePage/HomePage";
import HeaderMain from "./components/Header/HeaderMain";

const App = () => {
  return (
    <Router>
      <Fragment>
        {/* <HeaderMain /> */}
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Fragment>
    </Router>
  );
};

export default App;

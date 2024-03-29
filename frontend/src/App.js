//Meta import
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/material-kit-pro-react.scss?v=1.9.0";

//Page import
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import HomePage from "./views/HomePage/HomePage";
import ProductPage from "./views/ProductPage/ProductPage";
import CartPage from "./views/CartPage/CartPage";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart/:id" component={CartPage} exact />
        <Route path="/cart" component={CartPage} exact />
      </Fragment>
    </Router>
  );
};

export default App;

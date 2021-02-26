//Meta import
import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/material-kit-pro-react.scss?v=1.9.0";
import store from "./store";

//Page import
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "../../components/Header/Header.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Footer from "../../components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import SectionLatestOffers from "./Sections/SelectionLatestOffers.js";
import SectionProducts from "./Sections/SectionProducts.js";
import SectionBlog from "./Sections/SectionBlog.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import ecommerceHeader from "../../assets/img/examples/ecommerce-header.jpg";
import face1 from "../../assets/img/faces/card-profile6-square.jpg";
import face2 from "../../assets/img/faces/christian.jpg";
import face3 from "../../assets/img/faces/card-profile4-square.jpg";
import face4 from "../../assets/img/faces/card-profile1-square.jpg";
import face5 from "../../assets/img/faces/marc.jpg";
import face6 from "../../assets/img/faces/kendall.jpg";
import face7 from "../../assets/img/faces/card-profile5-square.jpg";
import face8 from "../../assets/img/faces/card-profile2-square.jpg";

import styles from "../../assets/jss/material-kit-pro-react/views/ecommerceStyle.js";

const useStyles = makeStyles(styles);

const HomePage = () => {
  return <div>This is the home page</div>;
};

export default HomePage;

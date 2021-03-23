/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalMall from "@material-ui/icons/LocalMall";
import ExitToApp from "@material-ui/icons/ExitToApp";
import VpnKey from "@material-ui/icons/VpnKey";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import headerStyles from "../../assets/jss/material-kit-pro-react/components/headerStyle.js";
import { logout } from "../../actions/userAction.js";

const useStyles = makeStyles(styles, headerStyles);

const HeaderLinks = (props) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button
          color={window.innerWidth < 960 ? "info" : "white"}
          target='_blank'
          className={classes.navButton}
          round>
          <ShoppingCart className={classes.icons} />
        </Button>
      </ListItem>
      {userInfo ? (
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            hoverColor={dropdownHoverColor}
            buttonText='Account'
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            buttonIcon={ViewCarousel}
            dropdownList={[
              <Link to='/about-us' className={classes.dropdownLink}>
                <AccountCircle className={classes.dropdownIcons} /> Profile
              </Link>,
              <Link
                to='/blog-post'
                className={classes.dropdownLink}
                onClick={logoutHandler}>
                <ExitToApp className={classes.dropdownIcons} /> Logout
              </Link>,
            ]}
          />
        </ListItem>
      ) : (
        <ListItem className={classes.title}>
          <Link to='/login'> Sign In</Link>
        </ListItem>
      )}
      {userInfo && userInfo.isAdmin && (
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            hoverColor={dropdownHoverColor}
            buttonText='Account'
            buttonProps={{
              className: classes.navLink,
              color: "transparent",
            }}
            buttonIcon={ViewCarousel}
            dropdownList={[
              <Link to='/about-us' className={classes.dropdownLink}>
                <AccountCircle className={classes.dropdownIcons} /> Users
              </Link>,
              <Link to='/blog-post' className={classes.dropdownLink}>
                <LocalMall className={classes.dropdownIcons} /> Products
              </Link>,
              <Link to='/blog-post' className={classes.dropdownLink}>
                <ShoppingBasket className={classes.dropdownIcons} /> Orders
              </Link>,
            ]}
          />
        </ListItem>
      )}
    </List>
  );
};

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};

export default HeaderLinks;

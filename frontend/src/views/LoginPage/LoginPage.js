/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import LockIcon from "@material-ui/icons/Lock";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import SnackbarContent from "../../components/Snackbar/SnackbarContent.js";

import loginPageStyle from "../../assets/jss/material-kit-pro-react/views/loginPageStyle.js";
import footerPageStyle from "../../assets/jss/material-kit-pro-react/components/cardFooterStyle.js";

import image from "../../assets/img/bg7.jpg";
import { Fragment } from "react";
import { login } from "../../actions/userAction";
import CardFooter from "../../components/Card/CardFooter.js";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { USER_LOGIN_RESET } from "../../constants/userConstant.js";

const useStyles = makeStyles(loginPageStyle);
const useFooterPageStyle = makeStyles(footerPageStyle);

const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
    dispatch({ type: USER_LOGIN_RESET });
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, [history, userInfo, redirect, window, document, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Kindly provide your credentials");
    } else {
      dispatch(login(email, password));
    }
  };

  const classes = useStyles();
  const classesCardFooter = useFooterPageStyle();

  return (
    <Fragment>
      {/* <Header
        brand="ProShopper"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      /> */}
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                  <CardHeader
                    color="info"
                    signup
                    className={classes.cardHeader}
                  >
                    <h4 className={classes.cardTitle}>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fab fa-instagram" />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.description + " " + classes.textCenter}>
                    Or Be Classical
                  </p>
                  <div className={classes.textCenter}>
                    {error && (
                      <SnackbarContent color="danger" message={error} />
                    )}
                    {message && (
                      <SnackbarContent color="danger" message={message} />
                    )}
                    {loading && <CircularProgress />}
                  </div>
                  <CardBody signup>
                    <CustomInput
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Email",
                        type: "email",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      id="pass"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Password",
                        type: "password",
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button simple color="info" size="lg" type="submit">
                      Sign In
                    </Button>
                  </div>
                </form>
                <CardFooter>
                  <div className={classesCardFooter.textRight}>
                    New Customer?{" "}
                    <Link
                      to={
                        redirect
                          ? `/register?redirect=${redirect}`
                          : "/register"
                      }
                    >
                      <strong>Register</strong>
                    </Link>{" "}
                    Now!
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          className={classes.footer}
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-login"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=mkpr-login"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="//blog.creative-tim.com/"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=mkpr-login"
                      target="_blank"
                      className={classes.block}
                    >
                      Licenses
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made with{" "}
                <Favorite className={classes.icon} /> by{" "}
                <a
                  href="https://www.creative-tim.com?ref=mkpr-login"
                  target="_blank"
                >
                  Creative Tim
                </a>{" "}
                for a better web
              </div>
            </div>
          }
        />
      </div>
    </Fragment>
  );
};

export default LoginPage;

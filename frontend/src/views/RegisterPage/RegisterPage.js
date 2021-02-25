import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import SnackbarContent from "../../components/Snackbar/SnackbarContent.js";

import signupPageStyle from "../../assets/jss/material-kit-pro-react/views/signupPageStyle.js";
import footerPageStyle from "../../assets/jss/material-kit-pro-react/components/cardFooterStyle.js";

import image from "../../assets/img/bg7.jpg";
import CardFooter from "../../components/Card/CardFooter.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { register } from "../../actions/userAction.js";
import { USER_REGISTER_RESET } from "../../constants/userConstant.js";

const useStyles = makeStyles(signupPageStyle);
const useFooterPageStyle = makeStyles(footerPageStyle);

const RegisterPage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [checked, setChecked] = useState([1]);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
    dispatch({ type: USER_REGISTER_RESET });
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, [location, history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !password || !email) {
      setMessage("Please provide your details");
    } else {
      if (password !== confirmPassword) {
        setMessage("Password and ConfirmPassword do not match");
      } else {
        dispatch(register(name, email, password));
      }
    }
  };

  const classes = useStyles();
  const classesCardFooter = useFooterPageStyle();

  return (
    <Fragment>
      <Header
        brand="ProShopper"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
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
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Register</h2>
                <div className={classes.textCenter}>
                  <Button justIcon round color="twitter">
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  {` `}
                  <Button justIcon round color="facebook">
                    <i className={classes.socials + " fab fa-facebook-f"} />
                  </Button>
                  {` `}
                  <Button justIcon round color="instagram">
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  {` `}
                  <h4 className={classes.socialTitle}>or be classical</h4>
                  {message && (
                    <SnackbarContent color="danger" message={message} />
                  )}
                  {error && <SnackbarContent color="danger" message={error} />}
                  {loading && <CircularProgress color="primary" />}
                </div>
                <CardBody>
                  <form className={classes.form} onSubmit={submitHandler}>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={5} md={5}>
                        <CustomInput
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Full Name...",
                          }}
                        />
                        <CustomInput
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            placeholder: "Password...",
                            type: "password",
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <CustomInput
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            type: "email",
                            placeholder: "Email...",
                            autoComplete: "off",
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <CustomInput
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            placeholder: "Confirm Password...",
                            type: "password",
                          }}
                        />
                      </GridItem>
                      <FormControlLabel
                        classes={{
                          label: classes.label,
                        }}
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => handleToggle(1)}
                            required={true}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                            }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                              root: classes.checkRoot,
                            }}
                            checked={checked.indexOf(1) !== -1 ? true : false}
                          />
                        }
                        label={
                          <span>
                            I agree to the{" "}
                            <a href="#pablo">terms and conditions</a>.
                          </span>
                        }
                      />
                    </GridContainer>
                    <div className={classes.textCenter}>
                      <Button round color="info" type="submit">
                        Get started
                      </Button>
                    </div>
                  </form>
                </CardBody>
                <CardFooter>
                  <div className={classesCardFooter.textRight}>
                    Do you have already an account?{" "}
                    <Link
                      to={redirect ? `/login?redirect=${redirect}` : "/login"}
                    >
                      <strong>Sign In</strong>
                    </Link>{" "}
                    Here!
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=mkpr-signup"
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
                      href="https://www.creative-tim.com/license?ref=mkpr-signup"
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
                  href="https://www.creative-tim.com?ref=mkpr-signup"
                  target="_blank"
                >
                  Creative Tim
                </a>{" "}
                for a better web.
              </div>
            </div>
          }
        />
      </div>
    </Fragment>
  );
};

export default RegisterPage;

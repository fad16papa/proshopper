import React, { Fragment, useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Footer from "../../components/Footer/Footer.js";
import Table from "../../components/Table/Table.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";

import shoppingCartStyle from "../../assets/jss/material-kit-pro-react/views/shoppingCartStyle.js";

import backgroundImage from "../../assets/img/examples/bg2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartAction.js";

import product1 from "../../assets/img/product1.jpg";
import product2 from "../../assets/img/product2.jpg";
import product3 from "../../assets/img/product3.jpg";

const useStyle = makeStyles(shoppingCartStyle);

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id;

  //This will get the location param in URL (ex. ?qty=1 then split it to '=' then get the [1] index
  // of the split object or else set the qty to 1)
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  const classes = useStyle();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Fragment>
      <Header
        brand='ProShopper'
        links={<HeaderLinks dropdownHoverColor='info' />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Parallax image={backgroundImage} filter='dark' small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}>
              <h2 className={classes.title}>Shopping Page</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <h3 className={classes.cardTitle}>Shopping Cart</h3>
              <Table
                tableHead={["", "PRODUCT", "PRICE", "QTY", "AMOUNT", ""]}
                tableData={[
                  cartItems.map((item) => [
                    <div className={classes.imgContainer} key={item.product}>
                      <img src={item.image} alt='...' className={classes.img} />
                    </div>,
                    <span key={item.product}>
                      <a href='#jacket' className={classes.tdNameAnchor}>
                        {item.name}
                      </a>
                    </span>,
                  ]),
                  {
                    purchase: true,
                    colspan: "3",
                    amount: (
                      <span>
                        <small>€</small>2,346
                      </span>
                    ),
                    col: {
                      colspan: 3,
                      text: (
                        <Button color='info' round>
                          Complete Purchase <KeyboardArrowRight />
                        </Button>
                      ),
                    },
                  },
                ]}
                tableShopping
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.description,
                  classes.description,
                  classes.textRight,
                  classes.textRight,
                  classes.textRight,
                ]}
                customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                customCellClasses={[
                  classes.tdName,
                  classes.customFont,
                  classes.customFont,
                  classes.tdNumber,
                  classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                  classes.tdNumber + " " + classes.textCenter,
                ]}
                customClassesForCells={[1, 2, 3, 4, 5, 6]}
              />
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/?ref=mkpr-shopping-cart'
                    target='_blank'
                    className={classes.block}>
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/presentation?ref=mkpr-shopping-cart'
                    target='_blank'
                    className={classes.block}>
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://blog.creative-tim.com/?ref=mkpr-shopping-cart'
                    target='_blank'
                    className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href='https://www.creative-tim.com/license?ref=mkpr-shopping-cart'
                    target='_blank'
                    className={classes.block}>
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href='https://www.creative-tim.com?ref=mkpr-shopping-cart'
                target='_blank'>
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </Fragment>
  );
};

export default CartPage;

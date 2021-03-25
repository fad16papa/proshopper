import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Card from "../../../components/Card/Card.js";
import CardHeader from "../../../components/Card/CardHeader.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";
import Button from "../../../components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";

import gucci from "../../../assets/img/examples/gucci.jpg";
import tomFord from "../../../assets/img/examples/tom-ford.jpg";
import dolce from "../../../assets/img/examples/dolce.jpg";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../actions/ProductAction.js";
import Rate from "../../../components/Rate/Rate.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

const SelectionLatestOffers = ({ products }) => {
  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Latest Offers</h2>
        <GridContainer>
          {products.map((product) => (
            <GridItem key={product._id} md={4} sm={4}>
              <Card product plain>
                <CardHeader image plain>
                  {/* <a href='#pablo'>
                    <img src={product.image} alt={product.name} />
                  </a> */}
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${gucci})`, opacity: 1 }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <Link to={`/product/${product._id}`}>
                    <h4 className={classes.cardTitle}>{product.name}</h4>
                  </Link>
                  {/* <h4 className={classes.cardTitle}>{product.name}</h4> */}
                  <p className={classes.cardDescription}>
                    {product.description}
                  </p>
                </CardBody>
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    <span
                      className={classNames(classes.price, classes.priceNew)}>
                      {" "}
                      €{product.price}
                    </span>
                    <span className={classes.rating}>
                      <Rate
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                        color='Green'></Rate>
                    </span>
                  </div>
                  <span className={classNames(classes.stats, classes.mlAuto)}>
                    <Tooltip
                      id='tooltip-top'
                      title='Saved to Wishlist'
                      placement='top'
                      classes={{ tooltip: classes.tooltip }}
                      className={classes.favorite}>
                      <Button justIcon simple color='rose'>
                        <Favorite />
                      </Button>
                    </Tooltip>
                  </span>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
};

export default SelectionLatestOffers;

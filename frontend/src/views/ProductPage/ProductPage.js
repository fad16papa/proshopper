/*eslint-disable*/
import React, { useEffect } from "react";
import { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import Accordion from "../../components/Accordion/Accordion.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "../../assets/jss/material-kit-pro-react/views/productStyle.js";

// images
import cardProduct1 from "../../assets/img/examples/card-product1.jpg";
import cardProduct3 from "../../assets/img/examples/card-product3.jpg";
import cardProduct4 from "../../assets/img/examples/card-product4.jpg";
import cardProduct2 from "../../assets/img/examples/card-product2.jpg";
import product1 from "../../assets/img/examples/product1.jpg";
import product2 from "../../assets/img/examples/product2.jpg";
import product3 from "../../assets/img/examples/product3.jpg";
import product4 from "../../assets/img/examples/product4.jpg";
import backgrond from "../../assets/img/bg6.jpg";
import { listProductDetails } from "../../actions/productAction.js";

const useStyles = makeStyles(productStyle);

const ProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [colorSelect, setColorSelect] = useState("0");
  const [sizeSelect, setSizeSelect] = useState("0");

  const classes = useStyles();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => {
    // if (successProductReview) {
    //   alert("Review submitted");
    //   setRating(0);
    //   setComment("");
    //   dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    // }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`);
  };

  const images = [
    {
      original: product.image,
      thumbnail: product.image,
    },
    {
      original: product.image,
      thumbnail: product.image,
    },
    {
      original: product.image,
      thumbnail: product.image,
    },
    {
      original: product.image,
      thumbnail: product.image,
    },
  ];

  return (
    <Fragment>
      <div className={classes.productPage}>
        <Header
          brand='ProShopper'
          links={<HeaderLinks dropdownHoverColor='info' />}
          fixed
          color='transparent'
          changeColorOnScroll={{
            height: 100,
            color: "info",
          }}
        />
        <Parallax image={backgrond} className={classes.pageHeader}>
          <div className={classes.container}>
            <GridContainer className={classes.titleRow}>
              <GridItem md={4} className={classes.mlAuto}>
                <Button color='white' className={classes.floatRight}>
                  <ShoppingCart /> 0 items
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={0}
                    items={images}
                    showThumbnails={true}
                    renderLeftNav={(onClick, disabled) => {
                      return (
                        <button
                          className='image-gallery-left-nav'
                          disabled={disabled}
                          onClick={onClick}
                        />
                      );
                    }}
                    renderRightNav={(onClick, disabled) => {
                      return (
                        <button
                          className='image-gallery-right-nav'
                          disabled={disabled}
                          onClick={onClick}
                        />
                      );
                    }}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>{product.name}</h2>
                  <h3 className={classes.mainPrice}>${product.price}</h3>
                  <Accordion
                    active={0}
                    activeColor='info'
                    collapses={[
                      {
                        title: "Description",
                        content: <p>{product.description}</p>,
                      },
                      {
                        title: "Designer Information",
                        content: <p>{product.description}</p>,
                      },
                      {
                        title: "Details and Care",
                        content: (
                          <ul>
                            <li>
                              Storm and midnight-blue stretch cotton-blend
                            </li>
                            <li>
                              Notch lapels, functioning buttoned cuffs, two
                              front flap pockets, single vent, internal pocket
                            </li>
                            <li>Two button fastening</li>
                            <li>84% cotton, 14% nylon, 2% elastane</li>
                            <li>Dry clean</li>
                          </ul>
                        ),
                      },
                    ]}
                  />
                  <GridContainer className={classes.pullRight}>
                    <Button round color='info' onClick={addToCartHandler}>
                      Add to Cart &nbsp; <ShoppingCart />
                    </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>
            <div className={classNames(classes.features, classes.textCenter)}>
              <GridContainer>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title='2 Days Delivery'
                    description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
                    icon={LocalShipping}
                    iconColor='info'
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title='Refundable Policy'
                    description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
                    icon={VerifiedUser}
                    iconColor='success'
                    vertical
                  />
                </GridItem>
                <GridItem md={4} sm={4}>
                  <InfoArea
                    title='Popular Item'
                    description='Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.'
                    icon={Favorite}
                    iconColor='rose'
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.relatedProducts}>
              <h3 className={classNames(classes.title, classes.textCenter)}>
                You may also be interested in:
              </h3>
              <GridContainer>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href='#pablo'>
                        <img src={cardProduct1} alt='cardProduct' />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6
                        className={classNames(
                          classes.cardCategory,
                          classes.textRose
                        )}>
                        Trending
                      </h6>
                      <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                      <div className={classes.cardDescription}>
                        Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                        crafted in Italy from hard-wearing red textured-leather.
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$1,459</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id='tooltip-top'
                          title='Save to Wishlist'
                          placement='top'
                          classes={{ tooltip: classes.tooltip }}>
                          <Button justIcon color='rose' simple>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href='#pablo'>
                        <img src={cardProduct3} alt='cardProduct3' />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6 className={classes.cardCategory}>Popular</h6>
                      <h4 className={classes.cardTitle}>Balmain</h4>
                      <div className={classes.cardDescription}>
                        Balmain{"'"}s mid-rise skinny jeans are cut with stretch
                        to ensure they retain their second-skin fit but move
                        comfortably.
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$459</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id='tooltip-top'
                          title='Save to Wishlist'
                          placement='top'
                          classes={{ tooltip: classes.tooltip }}>
                          <Button justIcon link>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href='#pablo'>
                        <img src={cardProduct4} alt='cardProduct4' />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6 className={classes.cardCategory}>Popular</h6>
                      <h4 className={classes.cardTitle}>Balenciaga</h4>
                      <div className={classes.cardDescription}>
                        Balenciaga{"'"}s black textured-leather wallet is
                        finished with the label{"'"}s iconic {"'"}Giant{"'"}{" "}
                        studs. This is where you can...
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$590</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id='tooltip-top'
                          title='Save to Wishlist'
                          placement='top'
                          classes={{ tooltip: classes.tooltip }}>
                          <Button justIcon color='rose' simple>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem sm={6} md={3}>
                  <Card product>
                    <CardHeader image>
                      <a href='#pablo'>
                        <img src={cardProduct2} alt='cardProduct2' />
                      </a>
                    </CardHeader>
                    <CardBody>
                      <h6
                        className={classNames(
                          classes.cardCategory,
                          classes.textRose
                        )}>
                        Trending
                      </h6>
                      <h4 className={classes.cardTitle}>Dolce & Gabbana</h4>
                      <div className={classes.cardDescription}>
                        Dolce & Gabbana{"'"}s {"'"}Greta{"'"} tote has been
                        crafted in Italy from hard-wearing red textured-leather.
                      </div>
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <div className={classes.price}>
                        <h4>$1,459</h4>
                      </div>
                      <div className={classes.stats}>
                        <Tooltip
                          id='tooltip-top'
                          title='Save to Wishlist'
                          placement='top'
                          classes={{ tooltip: classes.tooltip }}>
                          <Button justIcon link>
                            <Favorite />
                          </Button>
                        </Tooltip>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/?ref=mkpr-pricing'
                      target='_blank'
                      className={classes.block}>
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/presentation?ref=mkpr-pricing'
                      target='_blank'
                      className={classes.block}>
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='//blog.creative-tim.com/'
                      className={classes.block}>
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href='https://www.creative-tim.com/license?ref=mkpr-pricing'
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
                  href='https://www.creative-tim.com?ref=mkpr-pricing'
                  target='_blank'
                  className={classes.aClasses}>
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

export default ProductPage;

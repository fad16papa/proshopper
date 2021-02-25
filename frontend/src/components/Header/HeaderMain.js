import React from "react";
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";

const HeaderMain = () => {
  return (
    <header>
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
    </header>
  );
};

export default HeaderMain;

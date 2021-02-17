import {
  container,
  whiteColor,
  title,
  mlAuto,
  mrAuto,
} from "../../../material-kit-pro-react.js";
import customCheckboxRadioSwitch from "../../customCheckboxRadioSwitchStyle.js";
import customSelectStyle from "../../customSelectStyle.js";

const basicsStyle = {
  mlAuto,
  mrAuto,
  container,
  ...customSelectStyle,
  ...customCheckboxRadioSwitch,
  sections: {
    padding: "70px 0",
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: whiteColor,
  },
};

export default basicsStyle;

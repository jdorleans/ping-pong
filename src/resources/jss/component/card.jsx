import {container, textCenter} from "resources/jss/app";

export const card = {
  minWidth: "320px !important",
  maxWidth: "320px !important",
  ...textCenter,
  ...container
};

export const content = {
  textAlign: "left",
  lineHeight: "50px"
};

export const error = {
  color: "red",
  marginTop: "-22px",
  position: "absolute",
  left: "0",
  right: "0"
};

export const button = {
  marginBottom: "15px"
};

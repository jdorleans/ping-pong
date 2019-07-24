import grey from "@material-ui/core/es/colors/grey";

const containerFluid = {
  padding: "0 15px 15px 15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const title = {
  color: grey["900"],
  textDecoration: "none",
  fontWeight: "700",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: `"Roboto", "Times New Roman", serif`
};

const main = {
  background: "#FFFFFF",
  position: "relative",
  zIndex: "3"
};

const mlAuto = {
  marginLeft: "auto"
};

const mrAuto = {
  marginRight: "auto"
};

const textCenter = {
  textAlign: "center"
};


export {
  container,
  containerFluid,
  defaultFont,
  title,
  main,
  mlAuto,
  mrAuto,
  textCenter
};

import image from "resources/img/bg.jpg";

const style = {
  container: {
    zIndex: "2",
    width: "100%",
    maxWidth: "900px",
    marginRight: "auto",
    marginLeft: "auto",
    position: "relative"
  },
  pageHeader: {
    minHeight: "100vh",
    maxHeight: "1000px",
    height: "auto",
    paddingTop: "25vh",
    display: "inherit",
    position: "relative",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "top center",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  }
};

export default style;

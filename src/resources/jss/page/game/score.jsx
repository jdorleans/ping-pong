import {container, textCenter} from "resources/jss/app";
import {button, content} from "resources/jss/component/card";

const style = theme => ({
  card: {
    minWidth: "300px",
    ...textCenter,
    ...container,
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
    }
  },
  content,
  button
});

export default style;

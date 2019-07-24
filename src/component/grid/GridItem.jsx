// @material-ui components
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Component from "component/Component";
// resources
import React from "react";
import style from "resources/jss/component/grid/grid";

class GridItem extends Component {

  render() {
    const {classes, children, className, ...rest} = this.props;
    return (
      <Grid item {...rest} className={classes.item + " " + className}>
        {children}
      </Grid>
    );
  }
}

GridItem.defaultProps = {
  className: ""
};

export default withStyles(style)(GridItem);

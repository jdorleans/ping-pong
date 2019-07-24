// @material-ui components
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Component from "component/Component";
// resources
import PropTypes from "prop-types";
import React from "react";
import style from "resources/jss/component/grid/grid";

class GridContainer extends Component {

  render() {
    const {classes, children, className, ...rest} = this.props;
    return (
      <Grid container {...rest} className={classes.container + " " + className}>
        {children}
      </Grid>
    );
  }
}

GridContainer.defaultProps = {
  className: ""
};

GridContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(style)(GridContainer);

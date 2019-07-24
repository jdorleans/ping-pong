// @material-ui component
import withStyles from "@material-ui/core/styles/withStyles";
// core component
import Component from "component/Component";
import GridContainer from "component/grid/GridContainer";
// resources
import React from "react";
import style from "resources/jss/page/page";

class Page extends Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="center">
            {<this.props.component/>}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Page);

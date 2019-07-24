// @material-ui components
import Button from "@material-ui/core/Button/index";
import Card from "@material-ui/core/Card/index";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Component from "component/Component";
// resources
import React from "react";
import style from "resources/jss/page/game/score";

class Score extends Component {

  miss = e => {
    e.preventDefault();
    this.props.onMiss(this.props.state.idx)
  };

  score = e => {
    e.preventDefault();
    this.props.onScore(this.props.state.idx)
  };

  render() {
    const {state, service, classes} = this.props;
    return (
      <Card className={classes.card}>
        <h3>{state.name}</h3>
        <h4>{`${this.msg("score.games")}: ${state.wins}`}</h4>
        <h2>{state.score}</h2>
        <div>
          <Button disabled={!service} color={"secondary"} className={classes.button} onClick={this.miss}>
            {this.msg("score.miss")}
          </Button>
          <Button disabled={!service} color={"primary"} className={classes.button} onClick={this.score}>
            {this.msg("score.name")}
          </Button>
        </div>
      </Card>
    );
  }
}

export default withStyles(style)(Score);

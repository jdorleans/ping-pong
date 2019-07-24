// @material-ui components
import Button from "@material-ui/core/Button/index";
import Card from "@material-ui/core/Card/index";
import CardContent from "@material-ui/core/CardContent/index";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
// core components
import Component from "component/Component";
// resources
import React from "react";
import style from "resources/jss/page/game/newGame";

class NewGame extends Component {

  initDefault() {
    return {
      p1: this.msg("game.p1"),
      p2: this.msg("game.p2")
    };
  }

  new = e => {
    e.preventDefault();
    this.setState({
      p1: this.state.p1.trim() || this.msg("game.p1"),
      p2: this.state.p2.trim() || this.msg("game.p2")
    }, () => this.history.push("/game", this.state));
  };

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.card}>
        <h3>{this.msg("game.new")}</h3>
        <CardContent className={classes.content}>
          <TextField
            id={"p1"}
            placeholder={this.msg("game.p1")}
            type={"text"}
            value={this.state.p1}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            id={"p2"}
            placeholder={this.msg("game.p2")}
            type={"text"}
            value={this.state.p2}
            onChange={this.onChange}
            fullWidth
          />
        </CardContent>
        <div>
          <Button color={"primary"} className={classes.button} onClick={this.new}>
            {this.msg("game.start")}
          </Button>
        </div>
      </Card>
    );
  }
}

export default withStyles(style)(NewGame);

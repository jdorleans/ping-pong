// @material-ui components
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Component from "component/Component";
import EmailInput from "component/input/EmailInput";
import PasswordInput from "component/input/PasswordInput";
import {USERS} from "graphql/user";
// resources
import React from "react";
import {Link} from "react-router-dom";
import style from "resources/jss/page/auth/loginCard";

class LoginCard extends Component {

  initDefault() {
    return {
      email: "",
      password: "",
      isError: false
    };
  }

  login = e => {
    e.preventDefault();
    if (this.state.email.trim() === "" || this.state.password.trim() === "") {
      this.setState({isError: true});
      return;
    }
    const {isError, ...where} = this.state;
    this.query(USERS, {where}).then(({data, errors}) => {
      this.setState({isError: !!errors || data.users.length === 0});
      if (!errors && data && data.users.length > 0) {
        this.loginSession.save(data.users[0]);
        this.reset();
        this.history.push("/game/new");
      }
    });
  };

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.card}>
        <h3>{this.msg("login.name")}</h3>
        <CardContent className={classes.content}>
          <EmailInput value={this.state.email} onChange={this.onChange}/>
          <PasswordInput value={this.state.password} onChange={this.onChange}/>
        </CardContent>
        <div>
          {this.state.isError ? <small className={classes.error}>{this.msg("auth.invalid")}</small> : null}
          <Button color={"primary"} className={classes.button} onClick={this.login}>
            {this.msg("login.name")}
          </Button>
          <div>
            {this.msg("login.new")}
            <Link to={"/signUp"}>{this.msg("signup.name")}</Link>
          </div>
        </div>
      </Card>
    );
  }
}

export default withStyles(style)(LoginCard);

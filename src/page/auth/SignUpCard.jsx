// @material-ui components
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Component from "component/Component";
import EmailInput from "component/input/EmailInput";
import PasswordInput from "component/input/PasswordInput";
import {CREATE_USER} from "graphql/user";
// resources
import React from "react";
import {Link} from "react-router-dom";
import style from "resources/jss/page/auth/signUpCard";

class SignUpCard extends Component {

  initDefault() {
    return {
      email: "",
      password: "",
      isError: false
    };
  }

  signUp = e => {
    e.preventDefault();
    if (this.state.email.trim() === "" || this.state.password.trim() === "") {
      this.setState({isError: true});
      return;
    }
    const {isError, ...data} = this.state;
    this.mutate(CREATE_USER, {data}).then(({data, errors}) => {
      this.setState({isError: !!errors});
      if (!errors) {
        this.loginSession.save(data.createUser);
        this.reset();
        this.history.push("/game/new");
      }
    });
  };

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.card}>
        <h3>{this.msg("signup.name")}</h3>
        <CardContent className={classes.content}>
          <EmailInput value={this.state.email} onChange={this.onChange}/>
          <PasswordInput value={this.state.password} onChange={this.onChange}/>
        </CardContent>
        <div>
          {this.state.isError ? <small className={classes.error}>{this.msg("auth.invalid")}</small> : null}
          <Button color={"primary"} className={classes.button} onClick={this.signUp}>
            {this.msg("signup.name")}
          </Button>
          <div>
            {this.msg("signup.exist")}
            <Link to={"/login"}>{this.msg("login.name")}</Link>
          </div>
        </div>
      </Card>
    );
  }
}

export default withStyles(style)(SignUpCard);

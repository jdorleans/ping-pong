import {loginSession} from "App";
import React from "react";
import {Redirect, Route} from 'react-router-dom';

class LoggedRoute extends React.Component {

  render = () => loginSession.isLogged() ?
    <Route {...this.props} render={this.props.render ? () => this.props.render : null}/> :
    <Redirect push to="/"/>;

}

export default LoggedRoute;
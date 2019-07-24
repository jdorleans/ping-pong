// core components
import LoginSession from "cache/LoginSession";
import Storage from "cache/Storage"
import LoggedRoute from "component/LoggedRoute";
import graphql from "graphql/GraphQLClient";
import {createBrowserHistory} from "history";
import LoginCard from "page/auth/LoginCard";
import SignUpCard from "page/auth/SignUpCard";
import Game from "page/game/Game";
import NewGame from "page/game/NewGame";
// core pages
import Page from "page/Page";
// resources
import React from "react";
import {ApolloProvider} from 'react-apollo';
import intl from "react-intl-universal";
import {Route, Router, Switch} from "react-router-dom";
import "resources/scss/app.css";

export const history = createBrowserHistory();
export const storage = new Storage();
export const loginSession = new LoginSession();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.initLocales(props);
  }

  initLocales() {
    const l = intl.determineLocale({urlLocaleKey: "lang", cookieLocaleKey: "lang"});
    const locales = {
      en: require("resources/locale/en.json"),
      fr: require("resources/locale/fr.json")
    };
    intl.init({currentLocale: l in locales ? l : "en", locales});
  }

  logout = () => {
    history.push("/");
    storage.clear();
    return null;
  };

  render() {
    return (
      <ApolloProvider client={graphql}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={() => <Page component={LoginCard}/>}/>
            <Route exact path="/login" render={() => <Page component={LoginCard}/>}/>
            <Route exact path="/signup" render={() => <Page component={SignUpCard}/>}/>
            <Route exact path="/logout" render={this.logout}/>
            <LoggedRoute exact path="/game/new" render={<Page component={NewGame}/>}/>
            <LoggedRoute exact path="/game" render={<Page component={Game}/>}/>
          </Switch>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App;
// core components
import {history, loginSession, storage} from "App";
import graphql from "graphql/GraphQLClient";
// resources
import React from "react";
import intl from "react-intl-universal";
import {copy} from "util/json";

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.graphql = graphql;
    this.history = history;
    this.storage = storage;
    this.loginSession = loginSession;
    this.default = this.initDefault(props);
    this.state = this.initState(props);
  }

  initDefault() {
    return {};
  }

  initState() {
    return this.getDefault();
  }

  reset() {
    this.setState(this.getDefault());
  }

  getDefault = key => copy(this.default, key);

  onChange = e => {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value});
  };

  msg = (k, d) => intl.get(k).d(d);

  query(query, variables) {
    return this.graphql.query({
      query: query,
      variables: variables
    })
  }

  mutate(mutation, variables) {
    return this.graphql.mutate({
      mutation: mutation,
      variables: variables
    });
  }

}

export default Component;

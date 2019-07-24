import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloClient} from "apollo-client";
import {ApolloLink} from "apollo-link";
import {onError} from "apollo-link-error";
import {HttpLink} from "apollo-link-http";

const httpLink = new HttpLink({uri: process.env.REACT_APP_GRAPHQL_URI});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (networkError) console.warn(`[Network]: ${networkError}`);
  if (graphQLErrors) graphQLErrors.forEach(e => console.warn(`[GraphQL]: ${e.message}`));
});

const graphql = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all"
    },
    mutate: {
      fetchPolicy: "no-cache",
      errorPolicy: "all"
    }
  },
  cache: new InMemoryCache({
    dataIdFromObject: obj => obj.id || null
  })
});

export default graphql;
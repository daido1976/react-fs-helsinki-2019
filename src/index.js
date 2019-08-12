/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { GraphqlClient, client } from "./part8/graphql/graphqlClient";
import { GraphqlApp } from "./part8/graphql";

const App = () => {
  return (
    <div>
      <GraphqlApp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

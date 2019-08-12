import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { GraphqlClient, client } from "./graphqlClient";

export const GraphqlApp = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <div>
          <GraphqlClient />
        </div>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
};

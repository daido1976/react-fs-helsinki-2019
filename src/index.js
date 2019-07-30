/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { GraphqlClient, client } from "./part8/graphqlClient";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <GraphqlClient />
      </div>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

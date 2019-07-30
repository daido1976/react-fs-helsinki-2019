import React from "react";
import { Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const ALL_PERSONS = gql`
  {
    allPersons {
      name
      phone
      id
    }
  }
`;

export const GraphqlClient = () => {
  return (
    <Query query={ALL_PERSONS}>
      {result => {
        if (result.loading) {
          return <div>loading...</div>;
        }
        return <div>{result.data.allPersons.map(p => p.name).join(", ")}</div>;
      }}
    </Query>
  );
};

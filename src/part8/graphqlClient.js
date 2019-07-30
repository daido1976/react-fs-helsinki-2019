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

const Persons = ({ result }) => {
  if (result.loading) {
    return <div>loading...</div>;
  }

  const persons = result.data.allPersons;

  return (
    <div>
      <h2>Persons</h2>
      {persons.map(p => (
        <div key={p.name}>
          {p.name} {p.phone}
        </div>
      ))}
    </div>
  );
};

export const GraphqlClient = () => {
  return (
    <Query query={ALL_PERSONS}>{result => <Persons result={result} />}</Query>
  );
};

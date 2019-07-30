import React, { useState } from "react";
import { Query, Mutation, ApolloConsumer } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";
import { PersonForm } from "./PersonForm";

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

const FIND_PERSON = gql`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`;

const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $street: String!
    $city: String!
    $phone: String
  ) {
    addPerson(name: $name, street: $street, city: $city, phone: $phone) {
      name
      phone
      id
      address {
        street
        city
      }
    }
  }
`;

const Persons = ({ result }) => {
  const [person, setPerson] = useState(null);

  if (result.loading) {
    return <div>loading...</div>;
  }

  const showPerson = async name => {
    const { data } = await client.query({
      query: FIND_PERSON,
      variables: { nameToSearch: name }
    });
    setPerson(data.findPerson);
  };

  if (person) {
    return (
      <div>
        <h2>{person.name}</h2>
        <div>
          {person.address.street} {person.address.city}
        </div>
        <div>{person.phone}</div>
        <button onClick={() => setPerson(null)}>close</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Persons</h2>
      {result.data.allPersons.map(p => (
        <div key={p.name}>
          {p.name} {p.phone}
          <button onClick={() => showPerson(p.name)}>show address</button>
        </div>
      ))}
    </div>
  );
};

export const GraphqlClient = () => {
  return (
    <div>
      <ApolloConsumer>
        {client => (
          <Query query={ALL_PERSONS} pollInterval={2000}>
            {result => <Persons result={result} client={client} />}
          </Query>
        )}
      </ApolloConsumer>
      <h2>create new</h2>
      <Mutation mutation={CREATE_PERSON}>
        {addPerson => <PersonForm addPerson={addPerson} />}
      </Mutation>
    </div>
  );
};

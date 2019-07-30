import React, { useState } from "react";
import { Query, Mutation, ApolloConsumer } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";
import { useApolloClient, useQuery, useMutation } from "react-apollo-hooks";
import { PersonForm } from "./PersonForm";
import { PhoneForm } from "./PhoneForm";

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

const EDIT_NUMBER = gql`
  mutation editNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone) {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`;

const Persons = ({ result }) => {
  const [person, setPerson] = useState(null);
  const client = useApolloClient();

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
  const persons = useQuery(ALL_PERSONS);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleError = error => {
    setErrorMessage(error.graphQLErrors[0].message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  const [addPerson] = useMutation(CREATE_PERSON, {
    onError: handleError,
    refetchQueries: [{ query: ALL_PERSONS }]
  });

  const [editNumber] = useMutation(EDIT_NUMBER);

  return (
    <div>
      <Persons result={persons} />
      <h2>create new</h2>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <PersonForm addPerson={addPerson} />
      <h2>change number</h2>
      <PhoneForm editNumber={editNumber} />
    </div>
  );
};

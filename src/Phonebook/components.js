/* eslint-disable react/prop-types */
import React from "react";

const Person = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

export const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </ul>
  );
};

export const Filter = ({ filter, handleFilter }) => {
  return (
    <React.Fragment>
      filter shown with <input value={filter} onChange={handleFilter} />
    </React.Fragment>
  );
};

export const PersonForm = ({
  addInfo,
  name,
  number,
  handleName,
  handleNumber
}) => {
  return (
    <React.Fragment>
      <form onSubmit={addInfo}>
        <div>
          name: <input value={name} onChange={handleName} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </React.Fragment>
  );
};

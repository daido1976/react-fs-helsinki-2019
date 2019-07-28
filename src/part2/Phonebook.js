/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Row = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

const Filter = ({ filter, handleFilter }) => {
  return (
    <React.Fragment>
      filter shown with <input value={filter} onChange={handleFilter} />
    </React.Fragment>
  );
};

const PersonForm = ({ addInfo, name, number, handleName, handleNumber }) => {
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

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [showAll, setShowAll] = useState(true);

  const rows = () => {
    return personToFilter.map((person, index) => (
      <Row key={index} person={person} />
    ));
  };

  const personToFilter = showAll
    ? persons
    : persons.filter(person => {
        const pattern = RegExp(`.*${newFilter}.*`, "i");
        return person.name.match(pattern);
      });

  const handleFilterChange = event => {
    const value = event.target.value;
    console.log(value);
    value === "" ? setShowAll(true) : setShowAll(false);
    setNewFilter(value);
  };

  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const duplicateName = () => {
    return persons.some(person => newName === person.name);
  };

  const addInfo = event => {
    event.preventDefault();

    if (duplicateName()) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return null;
    }

    const personObject = {
      name: newName,
      number: newNumber
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilter={handleFilterChange} />
      <h2>Add a new person</h2>
      <PersonForm
        addInfo={addInfo}
        name={newName}
        number={newNumber}
        handleName={handleNameChange}
        handleNumber={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default Phonebook;

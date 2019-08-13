/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Persons, PersonForm, Filter } from "./components";

export const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    // $ npx json-server --port 3001 --watch src/Phonebook/db.json
    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data);
    });
  }, []);

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
      <Persons persons={personToFilter} />
    </div>
  );
};

import React, { useState } from "react";

const Row = props => {
  return <li>{props.person.name}</li>;
};

const Phonebook = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const rows = () => {
    return persons.map((person, index) => <Row key={index} person={person} />);
  };

  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const duplicateName = () => {
    return persons.some(person => newName === person.name);
  };

  const addName = event => {
    event.preventDefault();

    if (duplicateName()) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return null;
    }

    const personObject = {
      name: newName
    };

    setPersons(persons.concat(personObject));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default Phonebook;

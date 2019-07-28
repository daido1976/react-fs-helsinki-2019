/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Note from "./Note";

const Form = props => {
  const [notes, setNotes] = useState(props.notes);

  const rows = () => notes.map(note => <Note key={note.id} note={note} />);

  return (
    <div>
      <h1>Notes</h1>
      <ul>{rows()}</ul>
    </div>
  );
};

export default Form;

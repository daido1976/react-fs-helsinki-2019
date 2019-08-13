/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Note } from "./Note";

export const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    // $ npx json-server --port 3001 --watch src/part2/Notes/db.json
    axios.get("http://localhost:3001/notes").then(response => {
      setNotes(response.data);
    });
  }, []);

  const noteToShow = showAll
    ? notes
    : notes.filter(note => note.important === true);

  const rows = () => noteToShow.map(note => <Note key={note.id} note={note} />);

  const addNote = event => {
    event.preventDefault();

    // 空文字のバリデーションチェック
    if (!newNote.trim()) {
      alert("Please enter note...!");
      setNewNote("");
      return null;
    }

    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    };

    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = event => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

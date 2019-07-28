/* eslint-disable react/prop-types */
import React from "react";

const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

export default Note;

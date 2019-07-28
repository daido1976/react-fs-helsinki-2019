import { useState, useEffect } from "react";
import axios from "axios";

const EffectHook = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then(response => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);
  console.log("render", notes.length, "notes");

  return "test";
};

export default EffectHook;

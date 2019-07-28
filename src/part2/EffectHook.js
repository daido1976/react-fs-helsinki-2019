import { useState, useEffect } from "react";
import axios from "axios";

const EffectHook = () => {
  const [notes, setNotes] = useState([]);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then(response => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  };

  useEffect(hook, []);

  return "test";
};

export default EffectHook;

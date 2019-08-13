/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { Phonebook } from "./Phonebook";

const App = () => {
  return (
    <div>
      <Phonebook />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

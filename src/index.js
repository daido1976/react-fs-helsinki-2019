/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { Field } from "./part5/useField";

const App = () => {
  return (
    <div>
      <Field />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

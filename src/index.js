/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

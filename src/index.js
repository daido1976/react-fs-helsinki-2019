/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import Unicafe from "./part1/Unicafe";

const App = () => {
  return (
    <div>
      <Unicafe />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

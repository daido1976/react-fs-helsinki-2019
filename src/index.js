/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { Notes } from "./part2/Notes";

const App = () => {
  return (
    <div>
      <Notes />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

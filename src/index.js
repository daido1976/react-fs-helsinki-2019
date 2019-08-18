/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { ReactRouter } from "./part7/ReactRouter";

const App = () => {
  return (
    <div>
      <ReactRouter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

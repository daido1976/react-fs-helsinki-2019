/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { GraphqlApp } from "./part8/graphql";

const App = () => {
  return (
    <div>
      <GraphqlApp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

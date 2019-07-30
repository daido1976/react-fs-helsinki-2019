/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import GraphqlClient from "./part8/graphqlClient";

const App = () => {
  return (
    <div>
      <GraphqlClient />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./part7/vanillaRouter";

const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

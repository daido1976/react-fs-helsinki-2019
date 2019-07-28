/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import EffectHook from "./part2/EffectHook";

const App = () => {
  return (
    <div>
      <EffectHook />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import Form from "./part2/Form";
import notes from "./part2/notes";

const App = () => {
  return (
    <div>
      <Form notes={notes} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

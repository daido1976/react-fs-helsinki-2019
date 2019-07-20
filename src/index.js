/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const setToValue = value => () => setCounter(value);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={setToValue(counter + 1)} text="+" />
      <Button onClick={setToValue(counter - 1)} text="-" />
      <Button onClick={setToValue(0)} text="C" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

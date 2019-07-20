import React, { useState } from "react";
import ReactDOM from "react-dom";

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const setToValue = value => () => setCounter(value);

  return (
    <div>
      <Display counter={counter} />
      <button onClick={setToValue(counter + 1)}>plus</button>
      <button onClick={setToValue(0)}>zero</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

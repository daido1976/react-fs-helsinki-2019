/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Unicafe = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = value => setGood(value);
  const setToNeutral = value => setNeutral(value);
  const setToBad = value => setBad(value);

  return (
    <div>
      <h2>フィードバックをください！</h2>
      <Button onClick={() => setToGood(good + 1)} text="いいね！" />
      <Button onClick={() => setToNeutral(neutral + 1)} text="ふつう" />
      <Button onClick={() => setToBad(bad + 1)} text="イマイチ…" />
      <h2>結果</h2>
      <div>いいね！ {good}</div>
      <div>ふつう {neutral}</div>
      <div>イマイチ… {bad}</div>
    </div>
  );
};

export default Unicafe;

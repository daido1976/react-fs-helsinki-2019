/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = props => {
  return (
    <div>
      <h2>結果</h2>
      <div>いいね！ {props.good}</div>
      <div>ふつう {props.neutral}</div>
      <div>イマイチ… {props.bad}</div>
      <div>合計 {props.total}</div>
      <div>いいね率 {props.average}%</div>
    </div>
  );
};

const Unicafe = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = value => setGood(value);
  const setToNeutral = value => setNeutral(value);
  const setToBad = value => setBad(value);
  const calcTotal = () => good + neutral + bad;
  const calcAverage = () => {
    if (calcTotal()) {
      return good / calcTotal();
    } else {
      return 0;
    }
  };

  return (
    <div>
      <h2>フィードバックをください！</h2>
      <Button onClick={() => setToGood(good + 1)} text="いいね！" />
      <Button onClick={() => setToNeutral(neutral + 1)} text="ふつう" />
      <Button onClick={() => setToBad(bad + 1)} text="イマイチ…" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={calcTotal()}
        average={Math.round(calcAverage() * 100)}
      />
    </div>
  );
};

export default Unicafe;

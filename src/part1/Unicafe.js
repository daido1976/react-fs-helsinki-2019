/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad, total, average }) => {
  if (total) {
    return (
      <div>
        <h2>結果</h2>
        <table>
          <tbody>
            <Statistic text="いいね！" value={good} />
            <Statistic text="ふつう" value={neutral} />
            <Statistic text="イマイチ…" value={bad} />
            <Statistic text="合計" value={total} />
            <Statistic text="いいね率" value={average + "%"} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h2>結果</h2>
        <div>フィードバックはまだありません</div>
      </div>
    );
  }
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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

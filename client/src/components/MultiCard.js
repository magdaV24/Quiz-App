import "./MultiCard.css";
import React, { useMemo, useState } from "react";

export default function MultiCard({ card }) {
  const options = [card.option_1, card.option_2, card.option_3, card.answer];
  const index = useMemo(() => [0, 1, 2, 3], []);

  const [decision, setDecision] = useState("");
 
  let points = 0;
  const checkAnswer = (e) => {
    e.preventDefault();
    if (decision === card.answer) {
      points += 1;
      console.log(points);
    }
    return points
  };

  const shuffle = (array) => {
    let x = array.length;
    let random;

    while (x !== 0) {
      random = Math.floor(Math.random() * x);
      x -= 1;

      [array[x], array[random]] = [array[random], array[x]];
    }

    return array;
  };
  const i = useMemo(() => shuffle(index), [index]);

  return (
    <div className="multi-wrapper">
      <div className="row1">
        <div className="col1">
          <span>{card.question}</span>
          <span>{points}</span>
        </div>
        <div className="col2">
          <div className="option" onClick={() => setDecision(options[i[0]])}>
            {options[i[0]]}
          </div>

          <div className="option" onClick={() => setDecision(options[i[1]])}>
            {options[i[1]]}
          </div>

          <div className="option" onClick={() => setDecision(options[i[2]])}>
            {options[i[2]]}
          </div>

          <div className="option" onClick={() => setDecision(options[i[3]])}>
            {options[i[3]]}
          </div>
        </div>
      </div>
      <div className="row2">
        <button onClick={(e) => checkAnswer(e)}>Check</button>
      </div>
    </div>
  );
}

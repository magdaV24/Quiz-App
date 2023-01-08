import "./MultiCard.css";
import React, { useMemo, useState } from "react";

export default function MultiCard({ card }) {
  const options = [card.option_1, card.option_2, card.option_3, card.answer];
  const index = useMemo(() => [0, 1, 2, 3], []);

  const [decision, setDecision] = useState("");
  const [correct, setCorrect] = useState('')
  const [styleOne, setStyleOne] = useState({backgroundColor: 'var(--gold)'})
  const [styleTwo, setStyleTwo] = useState({backgroundColor: 'var(--gold)'})
  const [styleThree, setStyleThree] = useState({backgroundColor: 'var(--gold)'})
  const [styleFour, setStyleFour] = useState({backgroundColor: 'var(--gold)'})
  const [background, setBackground] = useState({backgroundColor: 'var(--tan'})
 
  const checkAnswer = (e) => {
    e.preventDefault();
    if (decision === card.answer) {
      setCorrect("Correct!")
      setBackground({backgroundColor: 'var(--right)'})
    } else {
      setCorrect("Wrong!")
      setBackground({backgroundColor: 'var(--wrong)'})
    }
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

  const pickOne = (e) => {
    e.preventDefault();
    setDecision(options[i[0]])
    setStyleOne({backgroundColor: 'var(--tan)'})
  }

  const pickTwo = (e) => {
    e.preventDefault();
    setDecision(options[i[1]])
    setStyleTwo({backgroundColor: 'var(--tan)'})
  }

  const pickThree = (e) => {
    e.preventDefault();
    setDecision(options[i[2]])
    setStyleThree({backgroundColor: 'var(--tan)'})
  }

  const pickFour = (e) => {
    e.preventDefault();
    setDecision(options[i[3]])
    setStyleFour({backgroundColor: 'var(--tan)'})
  }

  return (
    <div className="multi-wrapper" style={background}>
      <div className="row1">
        <div className="col1">
          <span>{card.question}</span>
          <span>{correct}</span>
        </div>
        <div className="col2">
          <div className="option" style={styleOne} onClick={(e) => pickOne(e)}>
            {options[i[0]]}
          </div>

          <div className="option" style={styleTwo} onClick={(e) => pickTwo(e)}>
            {options[i[1]]}
          </div>

          <div className="option" style={styleThree} onClick={(e) => pickThree(e)}>
            {options[i[2]]}
          </div>

          <div className="option" style={styleFour} onClick={(e) => pickFour(e)}>
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

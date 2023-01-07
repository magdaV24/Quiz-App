import "./MakeCards.css";
import React, { useContext, useState } from "react";
import UserBar from "../components/UserBar";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function MakeCards() {
  const { currentUser } = useContext(AuthContext);
  const [makeChoicesCard, setMakeChoicesCard] = useState(false);
  const [makeFlipCard, setMakeFlipCard] = useState(false);

  const [categoryMulti, setCategoryMulti] = useState("");
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [answer, setAnswer] = useState("");

  const createMultiCard = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/server/cards/multi", {
          question: question,
          optionOne: optionOne,
          optionTwo: optionTwo,
          optionThree: optionThree,
          optionFour: optionFour,
          answer: answer,
          categoryMulti: categoryMulti,
          createdBy: currentUser.username,
        })
        .then((res) => {
          console.log("It worked!");
          return res;
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }

    setQuestion("");
    setAnswer("");
    setOptionOne("");
    setOptionTwo("");
    setOptionThree("");
    setOptionFour("");
  };

  const [categoryFlip, setCategoryFlip] = useState("");
  const [face, setFace] = useState("");
  const [back, setBack] = useState("");

  const createFlipCard = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/server/cards/flip", {
          face: face,
          back: back,
          categoryFlip: categoryFlip,
          createdBy: currentUser.username,
        })
        .then((res) => {
          console.log("It worked!");
          return res;
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }

    setFace("");
    setBack("");
  };

  return (
    <div className="create-page">
      <UserBar />
      <section>
        <div className="options">
          <button onClick={() => setMakeChoicesCard((prev) => !prev)}>
            Multiple choices Card
          </button>
          <button onClick={() => setMakeFlipCard((prev) => !prev)}>
            Flip Card
          </button>
        </div>

        {makeChoicesCard && (
          <div className="multi-card-wrapper">
            <form className="multi-card-form" onSubmit={createMultiCard}>
              <label>
                <span>Category:</span>
                <input
                  onChange={(e) => setCategoryMulti(e.target.value)}
                  value={categoryMulti}
                />
              </label>

              <label>
                <span>Question:</span>
                <input
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                />
              </label>

              <label>
                <span>Option 1:</span>
                <input
                  onChange={(e) => setOptionOne(e.target.value)}
                  value={optionOne}
                />
              </label>

              <label>
                <span>Option 2:</span>
                <input
                  onChange={(e) => setOptionTwo(e.target.value)}
                  value={optionTwo}
                />
              </label>

              <label>
                <span>Option 3:</span>
                <input
                  onChange={(e) => setOptionThree(e.target.value)}
                  value={optionThree}
                />
              </label>

              <label>
                <span>Option 4:</span>
                <input
                  onChange={(e) => setOptionFour(e.target.value)}
                  value={optionFour}
                />
              </label>

              <label>
                <span>Answer:</span>
                <input
                  onChange={(e) => setAnswer(e.target.value)}
                  value={answer}
                />
              </label>

              <button>submit</button>
            </form>
          </div>
        )}

        {makeFlipCard && (
          <div className="flip-card-wrapper">
            <form onSubmit={createFlipCard}>
              <label>
                <label>
                  <span>Category:</span>
                  <input
                    onChange={(e) => setCategoryFlip(e.target.value)}
                    value={categoryFlip}
                  />
                </label>

                <span>Face:</span>
                <textarea
                  onChange={(e) => setFace(e.target.value)}
                  value={face}
                />
              </label>

              <label>
                <span>Back:</span>
                <textarea
                  onChange={(e) => setBack(e.target.value)}
                  value={back}
                />
              </label>
              <button>submit</button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}

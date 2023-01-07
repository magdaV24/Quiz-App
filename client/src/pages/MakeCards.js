import "./MakeCards.css";
import React, { useState } from "react";
import UserBar from "../components/UserBar";

export default function MakeCards() {
  const [makeChoicesCard, setMakeChoicesCard] = useState(false);
  const [makeFlipCard, setMakeFlipCard] = useState(false);
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
            <form className="multi-card-form">
              <label>
                <span>Question:</span>
                <input />
              </label>

              <label>
                <span>Option 1:</span>
                <input />
              </label>

              <label>
                <span>Option 2:</span>
                <input />
              </label>


              <label>
                <span>Option 3:</span>
                <input />
              </label>

              <label>
                <span>Option 4:</span>
                <input />
              </label>

              <label>
                <span>Answer:</span>
                <input />
              </label>

              <button>submit</button>
            </form>
          </div>
        )}

        {makeFlipCard && (
          <div className="flip-card-wrapper">
            <p>Hi</p>
          </div>
        )}
      </section>
    </div>
  );
}

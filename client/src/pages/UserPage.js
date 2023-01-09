import "./UserPage.css";
import React, { useContext, useEffect, useState } from "react";
import UserBar from "../components/UserBar";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UserPage() {
  const { currentUser } = useContext(AuthContext);
  const createdBy = currentUser.username;
  const [multiCards, setMultiCards] = useState();
  const [flipCards, setFlipCards] = useState();

  useEffect(() => {
    const getMultiCards = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/server/cards/multi/${createdBy}`
        );
        setMultiCards(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMultiCards();

    const getFlipCards = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/server/cards/flip/${createdBy}`
        );
        setFlipCards(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFlipCards();
  }, [createdBy]);

  const deleteMultiCard = async (card, e) => {
    e.preventDefault();
    const id = card.id;

    try {
      await axios.delete(`http://localhost:5000/server/cards/multi/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFlipCard = async (card, e) => {
    e.preventDefault();
    const id = card.id;

    try {
      await axios.delete(`http://localhost:5000/server/cards/flip/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <UserBar />
      <div className="user-page">
        <div>
          <span>Your Multiple Choices Cards</span>
          <div className="multi-cards">
            {multiCards === "" && (
              <Link to="/create" target="_blank">
                <h4>You have no cards created as of now. Go make some!</h4>
              </Link>
            )}
            {multiCards &&
              multiCards.map((card) => (
                <div className="wrapper1" key={card.id}>
                  <div className="header">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="category">{card.category}</div>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="icon"
                        onClick={(e) => deleteMultiCard(card, e)}
                      />
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid var(--background)",
                        fontSize: "25px",
                      }}
                    >
                      {card.question}
                    </div>
                  </div>
                  <div className="body">
                    <div className="option">{card.option_1}</div>
                    <div className="option">{card.option_2}</div>
                    <div className="option">{card.option_3}</div>
                    <div className="option" style={{ color: "var(--right)" }}>
                      {card.answer}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div>
          <span>Your Flip Cards</span>
          <div className="flip-cards">
            {flipCards === "" && (
              <Link to="/create" target="_blank">
                <h4>You have no cards created as of now. Go make some!</h4>
              </Link>
            )}
            {flipCards &&
              flipCards.map((card) => (
                <div className="wrapper2" key={card.id}>
                  <div className="header">
                    <div className="category">{card.category}</div>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon"
                      onClick={(e) => deleteFlipCard(card, e)}
                    />
                  </div>
                  <div className="face">{card.face}</div>
                  <div className="back">{card.back}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

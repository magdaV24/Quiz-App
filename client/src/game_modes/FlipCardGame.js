import "./FlipCardGame.css";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import FlipCard from "../components/FlipCard";
import { AuthContext } from "../context/AuthContext";
import { useFlipCards } from "../hooks/useFlipCards";

export default function FlipCardGame() {
  const { currentUser } = useContext(AuthContext);
  // Getting the categories from the database.

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getCategs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/server/cards/flipCategs"
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategs();
  }, []);

  // Fetching one card from the database

  const categ = category;
  const createdBy = currentUser.username;

  let card = useFlipCards(categ, createdBy);

  return (
    <div className="flip-card-game">
      <section className="categories">
        <span>Select a category:</span>
        <div className="map">
          {categories &&
            categories.map((categ) => (
              <button
                key={Math.random()}
                onClick={(e) => setCategory(e.target.value)}
                value={categ.category}
              >
                {categ.category}
              </button>
            ))}
        </div>
      </section>
      <section className="card-section">
        {card && (
          <>
            <FlipCard card={card[0]} />
            <button>Another</button>
          </>
        )}
      </section>
    </div>
  );
}

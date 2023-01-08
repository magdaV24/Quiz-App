import './MultiChoiceGame.css'
import React, { useContext, useEffect, useState } from 'react'
import { useMultiCards } from '../hooks/useMultiCards'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import MultiCard from '../components/MultiCard'

export default function MultiChoiceGame() {
  const { currentUser} = useContext(AuthContext)
  
  // Getting the categories from the database.

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState('')
  const createdBy = currentUser.username

  useEffect(() => {
    const getCategs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/server/cards/multiCategs"
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategs();
  }, []);

  function getInput(){
    return {
      categ: category,
      createdBy: createdBy,
      limit: limit
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    setInput(getInput())
  }
  
  const [input, setInput] = useState(getInput)

  const cards = useMultiCards(input)
  return (
    <div className='multi-card-game'>
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
        <section>
          <span>How many questions?</span>
          <input type='number' onChange={(e) => setLimit(e.target.value)} value={limit}/>
        </section>
      </section>
      <section>
        <button onClick={(e) => handleClick(e)}>Generate Test</button>
      </section>
      <section className='multi-cards'>
      {cards && cards.map(card => (
        <MultiCard card={card} key={card.id} />
      ))}
      </section>
    </div>
  )
}

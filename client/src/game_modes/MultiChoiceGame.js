import './MultiChoiceGame.css'
import React, { useContext } from 'react'
import { useMultiCards } from '../hooks/useMultiCards'
import { AuthContext } from '../context/AuthContext'

export default function MultiChoiceGame() {
  const { currentUser} = useContext(AuthContext)
  const cards = useMultiCards("categ", currentUser.username, 3)
  return (
    <div>
      {cards && cards.map(card => (
        <p key={card.id}>{card.question}</p>
      ))}
    </div>
  )
}

import './GamePage.css'
import React, { useState } from 'react'
import UserBar from '../components/UserBar'
import FlipCardGame from '../game_modes/FlipCardGame'
import MultiChoiceGame from '../game_modes/MultiChoiceGame'

export default function GamePage() {

  const [isFlip, setIsFlip] = useState(false)
  const [isMulti, setIsMulti] = useState(false)
  
  return (
    <div className='game-page'>
      <UserBar />
      <section className='select-game'>
        <div className='game-buttons'>
          <span>Select a game mode:</span>
          <div className='buttons'>
            <button onClick={() => setIsMulti(prev => !prev)}>Multiple Choices</button>
            <button onClick={() => setIsFlip(prev => !prev)}>Flip Cards</button>
          </div>
        </div>
      </section>
      <section className='game'>
        {isMulti && <MultiChoiceGame />}
        {isFlip && <FlipCardGame />}
      </section>
    </div>
  )
}

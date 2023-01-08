import './GamePage.css'
import React from 'react'
import UserBar from '../components/UserBar'
import FlipCardGame from '../game_modes/FlipCardGame'

export default function GamePage() {
  
  return (
    <div className='game-page'>
      <UserBar />
      <section className='select-game'>
        <div className='game-buttons'>
          <span>Select a game mode:</span>
          <div className='buttons'>
            <button>Multiple Choices</button>
            <button>Flip Cards</button>
          </div>
        </div>
      </section>
      <section className='game'>
        <FlipCardGame />
      </section>
    </div>
  )
}

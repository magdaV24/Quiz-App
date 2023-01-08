import './FlipCard.css'
import React, { useState } from 'react'

export default function FlipCard({card}) {

  const [flip, setFlip] = useState(false)
  return (
    <div className='flip-wrapper' onClick={() => setFlip(prev => !prev)}>
      <div className='flip-card'>
        {flip ? card.back : card.face}
      </div>
    </div>
  )
}

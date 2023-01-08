import './MultiCard.css'
import React from 'react'

export default function MultiCard({card}) {
  const options = [card.option_1, card.option_2, card.option_3, card.answer];

  return (
    <div className='multi-wrapper'>
        <div className='row1'>
        <div className='col1'>
          <span>{card.question}</span>
          </div>
          <div className='col2'>
            <div>{options[0]}</div>
            
            <div>{options[1]}</div>
            
            <div>{options[2]}</div>
            
            <div>{options[3]}</div>
          </div>
        </div>
        <div className='row2'>
          <button>Check</button>
        </div>
    </div>
  )
}

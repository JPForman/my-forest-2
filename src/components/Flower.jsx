import React from 'react'
import FlowerImg from '../assets/images/flower.png'

import './Flower.scss'

const Flower = ({ flowerEvent,date }) => {
  const [showDetails, setShowDetails] = React.useState(false)

  return (
    <div className="flower-container" style={{left: `${flowerEvent.left}%`, bottom: `${flowerEvent.bottom}%`}}>
      <div className={`details ${showDetails ? 'on' : 'off'}`} style={{transform: 'translate(-35%, -10px)'}}>
        <span className='note'>{flowerEvent.note}</span>
        <span className='date'>{date}</span>
      </div>
      <img className='flower' src={FlowerImg} alt='flower' onClick={() => setShowDetails(!showDetails)}/>
    </div>
  )
}

export default Flower;
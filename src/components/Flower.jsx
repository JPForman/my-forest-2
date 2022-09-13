import React from 'react'
import FlowerImg from '../assets/images/flower.png'

import './Flower.scss'

const Flower = ({ flowerEvent }) => {
  const [showDetails, setShowDetails] = React.useState(false)

  return (
    <div className="flower-container" style={{left: `${flowerEvent.left}%`, bottom: `${flowerEvent.bottom}%`}}>
      <span className={`details ${showDetails ? 'on' : 'off'}`} style={flowerEvent.left < 13 ? {transform: `translate(100px, 50px)`} : {transform: 'translate(-35%, -10px)'}}>{flowerEvent.note}</span>
      <img className='flower' src={FlowerImg} alt='flower' onClick={() => setShowDetails(!showDetails)}/>
    </div>
  )
}

export default Flower;
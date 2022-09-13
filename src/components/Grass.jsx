import React from 'react'
import GrassImg from '../assets/images/grass.png'

import './Grass.scss'

const Grass = ({ grassEvent, date }) => {
  const [showDetails, setShowDetails] = React.useState(false)

  return (
    <div className="grass-container" style={{left: `${grassEvent.left}%`, bottom: `${grassEvent.bottom}%`}}>
      <div className={`details ${showDetails ? 'on' : 'off'}`} style={{transform: 'translate(-35%, -10px)'}}>
        <span className='note'>{grassEvent.note}</span>
        <span className='date'>{date}</span>
      </div>
      <div  onClick={() => setShowDetails(!showDetails)}>
        <img src={GrassImg} alt="grass" className='grass' onClick={() => setShowDetails(!showDetails)} />
      </div>
    </div>
  )
}

export default Grass
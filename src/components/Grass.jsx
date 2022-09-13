import React from 'react'
import GrassImg from '../assets/images/grass.png'

import './Grass.scss'

const Grass = ({ grassEvent }) => {
  const [showDetails, setShowDetails] = React.useState(false)

  return (
    <div className="grass-container" style={{left: `${grassEvent.left}%`, bottom: `${grassEvent.bottom}%`}}>
      <span className={`details ${showDetails ? 'on' : 'off'}`} style={{transform: 'translate(-35%, -10px)'}}>{grassEvent.note}</span>
      <img src={GrassImg} alt="grass" className='grass' onClick={() => setShowDetails(!showDetails)} />
    </div>
  )
}

export default Grass
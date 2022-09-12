import React from 'react'
import GrassImg from '../assets/images/grass.png'

import './Grass.scss'

const Grass = ({ grassEvent }) => {

  return (
    <img src={GrassImg} alt="grass" className='grass' style={{left: `${grassEvent.left}%`, bottom: `${grassEvent.bottom}%`}} />
  )
}

export default Grass
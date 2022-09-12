import React from 'react'
import FlowerImg from '../assets/images/flower.png'

import './Flower.scss'

const Flower = ({ flowerEvent }) => {

  console.log('flower', flowerEvent);

  return (
    <img className='flower' src={FlowerImg} alt='flower' style={{left: `${flowerEvent.left}%`, bottom: `${flowerEvent.bottom}%`}} />
  )
}

export default Flower;
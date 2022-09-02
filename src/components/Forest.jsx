import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'

import './Forest.scss'

const Forest = () => {
  const [showCalendarInput, setShowCalendarInput] = React.useState(false)

  const toggleCalendarInput = () => {
    setShowCalendarInput(prevState => {
      return !showCalendarInput
    })
  }

  return (
    <div className='sky'>
      <div className='sun'></div>
      <div className='ground'></div>
      <div className='rock' onClick={toggleCalendarInput}></div>
      {showCalendarInput && (
        <div >
          <input type="date" />
        </div>
      )}
    </div>
  )
}

export default Forest
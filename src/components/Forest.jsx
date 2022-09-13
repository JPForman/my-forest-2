import React from 'react'

import Grass from './Grass'
import Flower from './Flower'
import Tree from './Tree'
import './Forest.scss'

const Forest = () => {
  const [showCalendarInput, setShowCalendarInput] = React.useState(false)
  const [showDetails, setShowDetails] = React.useState(false)
  const [newEvent, setNewEvent] = React.useState({ date: '', types: { active: false } })
  const [masterEventList, setMasterEventList] = React.useState([])
  const [showTitle, setShowTitle] = React.useState(true)

  const setDate = (event) => {
    const newDate = event
    setNewEvent(prevState => ({
      date: newDate
    }))
    setShowDetails(prevState => {
      return true;
    })
  }

  const setEventType = (chosenEvent) => {
    // this conditional turns makes an active type inactive
    if (newEvent.types && newEvent.types[chosenEvent] && newEvent.types[chosenEvent].active === true) {
      setNewEvent(prevState => ({
        ...prevState,
        types: {
          ...newEvent.types,
          [chosenEvent]: {
            active: false,
          }
        }
      }))
    // this conditional sets the new type of event and gives it a location
    } else {
      let randLeft
      let randBottom
      if(chosenEvent === 'tree') {
        // set tree location
        randLeft = Math.floor((Math.random() * 85) + 15)
        randBottom = Math.floor((Math.random() * 64) - 11)
      } else if (chosenEvent === 'flower') {
        // set flower location
        randLeft = Math.floor(Math.random() * 95)
        randBottom = Math.floor((Math.random() * 59) + 36)
      } else if (chosenEvent === 'grass') {
        // set grass location
        randLeft = Math.floor(Math.random() * 90)
        randBottom = Math.floor((Math.random() * 60) + 46)
      }
      setNewEvent(prevState => ({
        ...prevState,
        types: {
          ...newEvent.types,
          [chosenEvent]: {
            active: true,
            left: randLeft,
            bottom: randBottom
          }
        }
      }))
    }
    console.log('newEvent', newEvent);
  }

  const noteHandler = (type, note) => {
    console.log(note);
    setNewEvent(prevState => ({
      ...prevState,
      types: {
        ...prevState.types,
        [type]: {
          ...prevState?.types[type],
          note: note
        }
      }
    }))
  }

  const closeCalendar = () => {
    setShowCalendarInput(false)
    setShowDetails(false)
    setNewEvent({})
  }

  const saveEventHandler = () => {
    setMasterEventList(prevState => {
      return ([
        ...masterEventList,
        newEvent
      ])
    })
    closeCalendar()
  }

  return (
    <div className='sky'>
      <div className='cloud-1'></div>
      <div className='cloud-2'></div>
      <div className='flower-set'>
        {masterEventList.map((grassEvent, i) => (
          (grassEvent.types.grass && <Grass key={i} grassEvent={grassEvent.types.grass} />)
        ))}
        {masterEventList.map((flowerEvent, i) => (
          (flowerEvent.types.flower && <Flower key={i} flowerEvent={flowerEvent.types.flower} />)
        ))}
      </div>
      <div className='tree-set'>
        {masterEventList.map((treeEvent, i) => (
          (treeEvent.types.tree && <Tree key={i} treeEvent={treeEvent.types.tree} />)
        ))}
      </div>
      <div className='sun'></div>
      <div className='ground'></div>
      <div onClick={() => setShowTitle(!showTitle)} className='title-clicker'></div>
      {showTitle && <span className='title'>myForest</span>}
      {showCalendarInput && <div className='close-date' onClick={() => closeCalendar()}></div>}
      <div className='rock' onClick={() => setShowCalendarInput(!showCalendarInput)}></div>
      <div className='rock-clicker' onClick={() => setShowCalendarInput(!showCalendarInput)}></div>
      {showCalendarInput && (
        <div className='event-container'>
          {!showDetails && (
            <div className='date-container'>
              <span>what day do you think?</span>
              <input value={newEvent.date} type="date" onChange={(event) => { setDate(event.target.value) }} />
            </div>
          )}
          {showDetails && (
            <div className='details'>
              <span>the sweet day of {newEvent.date} deserves the following</span>
              <div className='options'>
                <span onClick={() => { setEventType('tree') }} className={`option ${newEvent.types?.tree?.active ? 'active' : ''}`}>add a tree :)</span>
                <span onClick={() => { setEventType('flower') }} className={`option ${newEvent.types?.flower?.active ? 'active' : ''}`}>flower me</span>
                <span onClick={() => { setEventType('grass') }} className={`option ${newEvent.types?.grass?.active ? 'active' : ''}`}>grass</span>
              </div>
              <div className='notes-container'>
                {newEvent.types?.tree?.active === true && (
                  <div className='note-details'>
                    <span>special tree note?</span>
                    <input type="text" onChange={(event) => noteHandler('tree', event.target.value)} />
                  </div>
                )}
                {newEvent.types?.flower?.active && (
                  <div className='note-details'>
                    <span>special flower note?</span>
                    <input type="text" onChange={(event) => noteHandler('flower', event.target.value)} />
                  </div>
                )}
                {newEvent.types?.grass?.active && (
                  <div className='note-details'>
                    <span>special grass note?</span>
                    <input type="text" onChange={(event) => noteHandler('grass', event.target.value)} />
                  </div>
                )}
              </div>
              <div className='buttons'>
                <span className='btn' onClick={() => saveEventHandler()}>true</span>
                <span className='btn' onClick={() => closeCalendar()}>false</span>
                <span className='btn' onClick={() => setShowDetails(false)}>change date</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Forest
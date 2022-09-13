import React from 'react'

import './Tree.scss'

const Tree = ({ treeEvent, date }) => {
  const [showDetails, setShowDetails] = React.useState(false)


  return (
    <div className='tree' style={{left: `calc(${treeEvent.left}% - 150px)`, bottom: `${treeEvent.bottom}%`}} >
      <div className={`details ${showDetails ? 'on' : 'off'}`} style={{transform: 'translate(-35%, -10px)'}}>
        <span className='note'>{treeEvent.note}</span>
        <span className='date'>{date}</span>
      </div>
      <div className='treeLeaves' onClick={() => setShowDetails(!showDetails)}>
        <div className='trunk'>
          <div className='leftBranch'></div>
        </div>
      </div>
    </div>
  )
}

export default Tree;
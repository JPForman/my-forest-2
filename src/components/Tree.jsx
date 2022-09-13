import React from 'react'

import './Tree.scss'

const Tree = ({ treeEvent }) => {
  const [showDetails, setShowDetails] = React.useState(false)


  return (
    <div className='tree' style={{left: `calc(${treeEvent.left}% - 150px)`, bottom: `${treeEvent.bottom}%`}} >
      <span className={`details ${showDetails ? 'on' : 'off'}`}>{treeEvent.note}</span>
      <div className='treeLeaves' onClick={() => setShowDetails(!showDetails)}>
        <div className='trunk'>
          <div className='leftBranch'></div>
        </div>
      </div>
    </div>
  )
}

export default Tree;
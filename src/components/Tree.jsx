import React from 'react'

import './Tree.scss'

const Tree = ({ treeEvent }) => {

  return (
    <div className='tree' style={{left: `calc(${treeEvent.left}% - 150px)`, bottom: `${treeEvent.bottom}%`}}>
      <div className='treeLeaves'>
        <div className='trunk'>
          <div className='leftBranch'></div>
        </div>
      </div>
    </div>
  )
}

export default Tree;
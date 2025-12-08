import React, { memo } from 'react'

const ChidlButton = memo(({onClick}) => {
     console.log("Child Rendered");
  return (
    <button className='btn btn-info' onClick={onClick}>ChidlButton</button>
  )
}
) 

export default ChidlButton
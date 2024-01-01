import React from 'react'

function Slots(obj) {
  return (
    <div>
        <h4>{obj.startTime}- {obj.endTime}</h4>
        <button className='btn btn-primary'>Book</button>
    </div>
    
  )
}

export default Slots
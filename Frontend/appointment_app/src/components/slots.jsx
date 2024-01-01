import React from 'react'

function Slots({obj}) {
  return (
    <div className='d-flex justify-content-between w-50 m-2'>
        
        <h4>{obj.startTime}- {obj.endTime}</h4>
        <button className='btn btn-primary'>Book</button>
    </div>
    
  )
}

export default Slots
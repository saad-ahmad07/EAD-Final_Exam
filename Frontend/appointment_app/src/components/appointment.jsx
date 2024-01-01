import React from 'react'

function Appointment(obj) {

    const data = obj.obj;
  return (

    <div className='d-flex flex-column align-items-start'>

        <h3>Booked Appointments</h3>
        <div className='d-flex justify-content-between w-25'>
        <h3>{data.user.name}</h3>
        <p>{data.user.email}</p>
        </div>
        <h6>Slot: {data.startTime}-{data.endTime}</h6>

        {/* {console.log("This is app",data)} */}
    </div>
  
  )
}

export default Appointment
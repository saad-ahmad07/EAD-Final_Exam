import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Slots({obj}) {
  const  handleClick = () =>{
      

       
    }
  return (
    <div className='d-flex justify-content-between w-50 m-2'>
        
        <h4>{obj.startTime}- {obj.endTime}</h4>
        <Link to="/addAppointment" >Add</Link> 
        {/* <button className="btn btn-primary" onClick={handleClick}>Add</button> */}
        <Outlet/>
    </div>
    
  )
}

export default Slots
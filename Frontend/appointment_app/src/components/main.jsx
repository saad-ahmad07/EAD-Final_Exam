import React, { useEffect, useState } from "react";
import Slots from "./slots";
import Appointment from "./appointment";
import  axios  from 'axios';
import { Outlet,Link } from "react-router-dom";
function Main() {
    const [slots,setSlots] = useState([])
    const [appoint,setApp] = useState([])

    const getData = () =>{
        axios.get("http://localhost:5000/home").then(data =>  setSlots(data.data)).catch(err => console.log(err))
        axios.get("http://localhost:5000/home/app").then(data => setApp(data.data)).catch(err => console.log(err))
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div className="d-flex flex-column w-75 p-4">

      <div className="m-3">
        <h3>Available Time Slots</h3>
        {
            slots.map(slot => (
                <Slots key={slot._id} obj={slot} className="m-4 p-4"/>
            ))
        }
       <Link to="/addSlot" className="btn btn-primary">Add</Link> 
      </div>

      <div className="m-3">
      {
            appoint.map(app => (
                <Appointment key={app._id} obj={app} className="m-4 p-4"/>
              
            ))
        }
       
      </div> 
      <Outlet/>
    </div>
    
  );
}

export default Main;

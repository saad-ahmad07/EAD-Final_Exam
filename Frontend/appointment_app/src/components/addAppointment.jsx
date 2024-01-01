import React from 'react'
import { Formik, useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';
function AddAppointment() {

    const [flag,setFlag] = useState()

   const formik =  useFormik({
        initialValues: {
            startTime: "",
            endTime: "",
            user: { name: "",
            email: ""}
        },
        onSubmit: (data) =>{
            axios.post("http://localhost:5000/home/app",data).then(data =>  console.log(data)).catch(err => console.log(err))
            console.log(data);
        }

    })
  return (
    <div className='m-5 p-4'>

<h3>Add Appointment</h3>
        <form onSubmit={formik.handleSubmit}>

            <label>Name:</label>
            <input name="name" type="text" value={formik.values.name} onChange={formik.handleChange}/>

            <label>Email:</label>
            <input name="email" type="email" value={formik.values.email} onChange={formik.handleChange}/>

            <input type="submit" />
        </form>
    </div>
  )
}

export default AddAppointment
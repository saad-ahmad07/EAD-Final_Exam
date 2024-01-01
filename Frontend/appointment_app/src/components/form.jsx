import React from 'react'
import { Formik, useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
function Form() {

   const formik =  useFormik({
        initialValues: {
            startTime: "",
            endTime: ""
        },
        onSubmit: (data) =>{
            axios.post("http://localhost:5000/home",data).then(data =>  console.log(data)).catch(err => console.log(err))
            // console.log(data);
        }

    })
  return (
    <div className='m-5 p-4'>

        <h3>Add Time Slot</h3>
        <form onSubmit={formik.handleSubmit}>
            <label>Start Time:</label>
            <input name="startTime" type="text" value={formik.values.start} onChange={formik.handleChange}/>

            <label>End Time:</label>
            <input name="endTime" type="text" value={formik.values.end} onChange={formik.handleChange}/>

            <input type="submit" />
        </form>
    </div>
  )
}

export default Form
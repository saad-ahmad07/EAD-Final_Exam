import React from 'react'
import { Formik, useFormik } from 'formik';

function Form() {
   const formik =  useFormik({
        initialValues: {
            name: "",
            email: ""
        },
        onSubmit: (data) =>{
            console.log(data);
        }
    })
  return (
    <div>

        <form action="">
            <label>Name:</label>
            <input name="name" type="text" value={formik.values.name}/>

            <label>Email:</label>
            <input name="email" type="email" value={formik.values.email}/>
        </form>
    </div>
  )
}

export default form
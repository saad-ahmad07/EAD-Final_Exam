import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { connectDB } from "./config/database.js"
import { Appointment } from "./model/TimeSlot.js"
import { Slots } from "./model/TimeSlot.js"
// Setup 
const app = express()
app.use(bodyParser.json())
app.use(cors())
connectDB()


// API end points 

app.get("/home",(req,res)=>{ // Fetches all the time slots
    Slots.find().then(slots => res.json(slots)).catch(err => res.json(err))
})

app.get("/home/app",(req,res)=>{ // Fetches all the appointments
    Appointment.find().then(appoint => res.json(appoint)).catch(err => res.json(err))
})

app.post("/home",(req,res)=>{ // Adds Slot to the Collection
    const {body} = req;
    Slots.create(body).then(obj => res.json(obj)).catch(err => res.json(err))
})      

app.post("/home/app",(req,res)=>{// Adds Appointments to the Collection
    const {body} = req;
    Appointment.create(body).then(obj => res.json(obj)).catch(err => res.json(err))
})

app.listen(5000,()=>{
    console.log("Listening at 5000....");
})
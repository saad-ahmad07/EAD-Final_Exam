import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { connectDB } from "./config/database.js"

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello World Saad")
})

app.listen(5000,()=>{
    console.log("Listening at 5000....");
})
import mongoose from "mongoose"

export function connectDB(){
mongoose.connect("mongodb://localhost:27017/appointment_scheduler",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Database is connected")).catch(err => console.log(err))
}

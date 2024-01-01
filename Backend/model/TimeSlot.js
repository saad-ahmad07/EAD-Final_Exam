import mongoose from "mongoose";

var Appointment = new mongoose.Schema({
    startTime: String,
    endTime: String,
    user: Object
})

export const Appointment = mongoose.model('Appointment',Appointment)
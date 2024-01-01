import mongoose from "mongoose";

var slots = new mongoose.Schema({
        startTime: String,
        endTime: String
})

var app = new mongoose.Schema({
    startTime: String,
    endTime: String,
    user: Object
})

export const Appointment = mongoose.model('Appointments',app)
export const Slots = mongoose.model('Slots',slots)
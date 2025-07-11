import mongoose from 'mongoose'
import { Hospital } from './hospital.models'

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    diagonsedWith:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    bloodGroup:{
       type: String,
        required: true 
    },
    gender:{
        type: String,
        enum : ['Male', "Female", "Other"],
        required: true
    },
    admittedIn:{
        name : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    },
    
    
},{timestamps: true})

export const Patient = mongoose.model('Patient' , patientSchema)
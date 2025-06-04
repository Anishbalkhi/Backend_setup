import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
name:{
        type: String,
        required: true
    },
    expertIn:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    qualifications:{
        type: String,
        required: true
    },
      experieceInYears:{
        type: Number,
        default: 0
    },


},{timestamps: true})

export const Doctor = mongoose.model('Doctor',doctorSchema)
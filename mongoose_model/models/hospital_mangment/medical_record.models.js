import mongoose from 'mongoose'

const medicalrecordSchema = new mongoose.Schema({
      patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  diagnosis: {
    type: String,
    required: true
  },
  treatment: {
    type: String,
    required: true
  },
  prescription: {
    type: String
  },
  visitDate: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String
  }

},{timestamps: true})

export const Medicalrecord = mongoose.model('Medicalrecord',medicalrecordSchema)

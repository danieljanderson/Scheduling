const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
  AppointmentDate: Date,
})

module.exports = AppointmentSchema

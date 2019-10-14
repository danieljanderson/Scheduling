const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentsSchema = new Schema({
  AppointmentDate: Date,
})

module.exports = AppointmentsSchema

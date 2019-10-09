const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
})
const Customer = mongoose.model('customer', CustomerSchema)

module.exports = Customer

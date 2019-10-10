const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
  firstName: {
    type: String,
    validate: {
      validator: firstName => firstName.length > 0,
      message: 'first name must be longer than 0 characters',
    },
    required: [true, 'First Name is required'],
  },
  lastName: {
    type: String,
    validate: {
      validator: lastName => lastName.length > 0,
      message: 'last name must be longer than 0 characters',
    },
    required: [true, 'Last Name is required'],
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator: email => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
      },
      message: 'that is not a valid email',
    },
    required: [true, 'Email is required'],
  },
})
const Customer = mongoose.model('customer', CustomerSchema)

module.exports = Customer

const assert = require('assert')
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app.js')
const Customer = mongoose.model('customer')

describe('Customers controller', () => {
  it('Post to /api/customers creates a new customer', done => {
    request(app)
      .post('/api/customers')
      .send({
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'na@na.com',
        appointments: [{ AppointmentDate: new Date(2018, 11, 24, 10, 33, 30, 0) }],
      })
      .end(() => {
        Customer.findOne({ email: 'na@na.com' }).then(customer => {
          console.log('this is the customers first name', customer.firstName)
          assert(customer.firstName === 'Joe')
          done()
        })
      })
  })
  it('Put to api/cutomers/id updates a existing customer', done => {
    const customer = new Customer({
      firstName: 'Joe',
      lastName: 'Smith',
      phoneNumber: '440-344-5726',
      email: 'test@test.com',
      appointments: [{ AppointmentDate: new Date(2018, 11, 24, 10, 33, 30, 0) }],
    })
    customer.save().then(() => {
      request(app)
        .put('/api/customers/' + customer._id)
        .send({ phoneNumber: '740-345-0987' })
        .end(() => {
          Customer.findOne({ email: 'test@test.com' }).then(customer => {
            assert(customer.phoneNumber === '740-345-0987')
            done()
          })
        })
    })
  })
  it('DELETE to /api/customers/id can delete a customer', done => {
    const customer = new Customer({
      firstName: 'Joe',
      lastName: 'Smith',
      phoneNumber: '440-344-5726',
      email: 'test@test.com',
      appointments: [{ AppointmentDate: new Date(2018, 11, 24, 10, 33, 30, 0) }],
    })
    customer.save().then(() => {
      request(app)
        .delete('/api/customers/' + customer._id)
        .end(() => {
          Customer.findOne({ email: 'test@test.com' }).then(customer => {
            console.log('Hi there', customer)
            assert(customer === null)
            done()
          })
        })
    })
  })
})

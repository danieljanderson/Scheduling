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
})

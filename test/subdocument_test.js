const assert = require('assert')
const Customer = require('../models/customer')
const testDate = new Date(2018, 11, 24, 10, 33, 30, 0)
describe('saving', () => {
  it('it can save a record', done => {
    const joe = new Customer({
      firstName: 'Joe',
      lastName: 'Smith',
      email: 'na@na.com',
      appointments: [{ AppointmentDate: new Date(2018, 11, 24, 10, 33, 30, 0) }],
    })
    joe
      .save()
      .then(() => Customer.findOne({ firstName: 'Joe' }))
      .then(customer => {
        console.log('this is the test date', testDate)
        console.log('this is the appointments date', customer.appointments[0].AppointmentDate)
        assert(customer.appointments[0].AppointmentDate.getTime() === testDate.getTime())
        done()
      })
  })
})

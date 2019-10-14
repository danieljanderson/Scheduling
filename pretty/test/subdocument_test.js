const assert = require('assert')
const Customer = require('../models/customer')

describe('Subdocuments', () => {
  it('can create a subdocument', done => {
    const joe = new Customer({
      firstName: 'Joe',
      lastName: 'Smith',
      email: 'na@na.com',
      appointments: [{ AppointmentDate: new Date(2018, 11, 24, 10, 33, 30, 0) }],
    })
  })
})

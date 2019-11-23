const assert = require('assert')
const Customer = require('../models/customer')

describe('Validating records', () => {
  it('requires a customers  firstName, lastName, email', () => {
    const customer = new Customer({
      firstName: undefined,
      lastName: undefined,
      email: undefined,
    })
    const validationResult = customer.validateSync()
    const firstNameMessage = validationResult.errors.firstName.message
    const lastNameMessage = validationResult.errors.lastName.message
    const emailMessage = validationResult.errors.email.message

    assert(
      firstNameMessage === 'First Name is required' &&
        lastNameMessage === 'Last Name is required' &&
        emailMessage === 'Email is required'
    )
  })
  it('requires customers  and a valid email.', () => {
    const customer = new Customer({
      firstName: '',
      lastName: '',
      email: 'a',
    })
    const validationResult = customer.validateSync()
    console.log(validationResult)
    const emailMessage = validationResult.errors.email.message

    assert(emailMessage === 'that is not a valid email')
  })
})

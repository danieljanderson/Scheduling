const Customer = require('../models/customer')
module.exports = {
  //this will be turned into a function that fetches all of the records from a database.
  greeting(req, res) {
    res.send({ hi: 'there' })
  },
  create(req, res) {
    const customerProps = req.body
    Customer.create(customerProps).then(customer => res.send(customer))
  },
}

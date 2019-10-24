const Customer = require('../models/customer')
module.exports = {
  //this will be turned into a function that fetches all of the records from a database.
  greeting(req, res) {
    res.send({ hi: 'there' })
  },
  create(req, res, next) {
    const customerProps = req.body
    //it creates the  record and then sends it back.
    Customer.create(customerProps)
      .then(customer => res.send(customer))
      .catch(next)
  },
}

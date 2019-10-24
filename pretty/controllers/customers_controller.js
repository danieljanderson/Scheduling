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
  update(req, res, next) {
    const customerID = req.params.id
    const customerProps = req.body

    Customer.findByIdAndUpdate({ _id: customerID }, customerProps)
      .then(() => Customer.findById({ _id: customerID }))
      .then(customer => res.send(customer))
      .catch(next)
  },
}

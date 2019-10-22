const CustomersController = require('../controllers/customers_controller')
module.exports = app => {
  // this will be where I fetch all the appointments from the database.
  app.get('/api', CustomersController.greeting)

  app.post('/api/customers', CustomersController.create)
}

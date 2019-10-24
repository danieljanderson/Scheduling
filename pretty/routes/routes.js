const CustomersController = require('../controllers/customers_controller')
module.exports = app => {
  // this will be where I fetch all the appointments from the database.
  app.get('/api', CustomersController.greeting)

  app.post('/api/customers', CustomersController.create)
  app.put('/api/customers/:id', CustomersController.update)
  app.delete('api/customers/:id', CustomersController.delete)
}

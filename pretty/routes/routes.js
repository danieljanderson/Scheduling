const AppointmentsController = require('../controllers/appointments_controller')
module.exports = app => {
  app.get('/api', (req, res) => {
    res.send({ hi: 'there' })
  })
}

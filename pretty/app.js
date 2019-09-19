var express = require('express')
const routes = require('./routes/routes')
var app = express()

// var port = 3000
// var mongoose = require('mongoose')
// var mongoDB = 'mongodb://127.0.0.1/my_database'

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
// var nameSchema = new mongoose.Schema({
//   firstName: String,
//   lastNameName: String,
//   emailAddress: String,
//   phoneNumber: String,
//   appointmentDate: String,
//   appointmentTime: String,
// })

// app.listen(port, () => {
//   console.log('Server listening on port ' + port)
// })

routes(app)
module.exports = app

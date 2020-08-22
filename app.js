const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
//app.use(express.static(__dirname, 'pretty'))
app.use(express.static('public'));
//app.use(express.static('sadie_website/pretty'))
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
  });
}
app.use(bodyParser.json());
routes(app);
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
module.exports = app;

//const express = require('express')
//const routes = require('./routes/routes')
//const  app = express()

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

//routes(app)
//module.exports = app

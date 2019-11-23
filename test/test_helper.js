const mongoose = require('mongoose')

before(done => {
  mongoose.connect('mongodb://localhost/scheduling_test', { useNewUrlParser: true })
  mongoose.connection
    .once('open', () => console.log('good to go'))
    .on('error', err => {
      console.warn('Warning', error)
    })
    .then(() => done())
})
beforeEach(done => {
  const { customers } = mongoose.connection.collections
  customers
    .drop()
    .then(() => done())
    .catch(() => done())
})

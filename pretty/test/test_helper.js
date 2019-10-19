const mongoose = require('mongoose')

before(done => {
  mongoose.connect('mongodb://localhost/scheduling_test', { useNewUrlParser: true })
  mongoose.connection
    .once('open', () => done())
    .on('error', err => {
      console.warn('Warning', error)
    })
})
beforeEach(done => {
  const { customers } = mongoose.connection.collections
  customers
    .drop()
    .then(() => done())
    .catch(() => done())
})

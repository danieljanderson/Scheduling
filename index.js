const dotenv = require('dotenv')
dotenv.config()
const app = require('./app')

app.listen(3050, () => {
  console.log('Running on port 3050')
})

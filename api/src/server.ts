const App = require('./app')
const connectToDatabase = require('./database')

App.listen(3000, () => {
  console.log('Server started')
})
connectToDatabase()

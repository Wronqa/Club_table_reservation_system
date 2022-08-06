const App = require('./app')

App.listen(3000, () => {
  console.log('Server started')
  console.log(process.env.HALO)
})

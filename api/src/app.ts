const express = require('express')
const tablesRoute = require('./routes/tablesRoute')
const dotenv = require('dotenv')

const app = express()

dotenv.config({ path: __dirname + '/config/.env' })

app.use('./api/tables', tablesRoute)

module.exports = app

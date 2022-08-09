require('dotenv').config({ path: __dirname + '/config/.env' })
const express = require('express')
const tablesRoute = require('./routes/tablesRoute')
const reservationRoute = require('./routes/reservationRoute')

const path = require('path')
const app = express()

app.use(express.json())

app.use('/api/tables', tablesRoute)
app.use('/api/reservation', reservationRoute)

module.exports = app

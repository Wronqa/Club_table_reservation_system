require('dotenv').config({ path: __dirname + '/config/.env' })

const express = require('express')
const tablesRoute = require('./routes/tablesRoute')
const orderRoute = require('./routes/reservationRoute')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.use('/api/tables', tablesRoute)
app.use('/api/order', orderRoute)

module.exports = app

export {}

const router = require('express').Router()
const { getAllTables } = require('../controllers/tablesController')

router.route('/').get(getAllTables)

module.exports = router

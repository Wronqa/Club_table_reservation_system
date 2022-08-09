import { ModuleResolutionKind } from 'typescript'

const router = require('express').Router()
const { getAllTables } = require('../controllers/tablesController')

router.route('/').get(getAllTables)

module.exports = router

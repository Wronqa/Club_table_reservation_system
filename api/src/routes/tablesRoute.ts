import { ModuleResolutionKind } from 'typescript'

const router = require('express').Router()
const { tablesController } = require('../controllers/tablesController')

router.route('/').get(tablesController)

module.exports = router

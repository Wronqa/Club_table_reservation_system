import { ModuleResolutionKind } from 'typescript'

const checkValidation = require('../middleware/checkValidation')
const router = require('express').Router()
const { newOrder } = require('../controllers/reservationController')

router.route('/').post(checkValidation(), newOrder)

module.exports = router

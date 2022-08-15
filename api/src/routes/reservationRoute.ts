import { ModuleResolutionKind } from 'typescript'

const checkValidation = require('../middleware/checkValidation')
const router = require('express').Router()
const {
  newOrder,
  getOrderDetails,
} = require('../controllers/reservationController')

router.route('/').post(checkValidation(), newOrder)
router.route('/:id').get(getOrderDetails)

module.exports = router

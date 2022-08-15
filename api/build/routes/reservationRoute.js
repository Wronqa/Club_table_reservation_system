"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkValidation = require('../middleware/checkValidation');
const router = require('express').Router();
const { newOrder, getOrderDetails, } = require('../controllers/reservationController');
router.route('/').post(checkValidation(), newOrder);
router.route('/:id').get(getOrderDetails);
module.exports = router;

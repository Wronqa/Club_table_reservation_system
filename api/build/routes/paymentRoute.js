"use strict";
const router = require('express').Router();
const { createPaymentSession } = require('../controllers/paymentController');
router.route('/create-checkout-session').post(createPaymentSession);
module.exports = router;

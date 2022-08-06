"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const { tablesController } = require('../controllers/tablesController');
router.route('/').get(tablesController);
module.exports = router;

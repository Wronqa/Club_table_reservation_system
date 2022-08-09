"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { check, body, param } = require('express-validator');
const { validator } = require('express-validator');
const checkValidation = () => {
    return [body('kuba').isLength({ min: 4 })];
};
module.exports = checkValidation;

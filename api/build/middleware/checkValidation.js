"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { check, body, param } = require('express-validator');
const { validator } = require('express-validator');
const checkValidation = (req) => {
    return [
        body('personalData.name')
            .trim()
            .isLength({ min: 2 })
            .matches(/^[A-Za-z\s]+$/)
            .escape()
            .withMessage('Name must have min 2 letters'),
        body('personalData.emailAddress')
            .trim()
            .isEmail()
            .normalizeEmail()
            .withMessage('Invalid email'),
        body('personalData.phoneNumber')
            .trim()
            .isLength({ min: 9 })
            .isNumeric()
            .escape()
            .withMessage('Invalid phone'),
        body('reservationInfo.date').trim().notEmpty().escape(),
        body('reservationInfo.time').trim().notEmpty().escape(),
        body('reservationInfo.table').trim().notEmpty().isNumeric().escape(),
        body('comment').optional().escape(),
    ];
};
module.exports = checkValidation;

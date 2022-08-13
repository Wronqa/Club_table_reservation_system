const { check, body, param } = require('express-validator')
const { validator } = require('express-validator')
const moment = require('moment')
import { Request, Response, NextFunction } from 'express'

const checkValidation = (req: Request) => {
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
      .escape()
      .withMessage('Invalid email'),
    body('personalData.phoneNumber')
      .trim()
      .isLength({ min: 9 })
      .isNumeric()
      .escape()
      .withMessage('Invalid phone'),
    body('reservationInfo.date')
      .escape()
      .custom((value: string) => {
        if (!moment(value, 'MM-DD-YYYY', true).isValid())
          throw new Error('Invalid date form')

        return true
      }),
    body('reservationInfo.time').trim().notEmpty().escape(),
    body('reservationInfo.table_id').trim().notEmpty().isNumeric().escape(),
    body('reservationInfo.comment').optional().escape(),
  ]
}

module.exports = checkValidation

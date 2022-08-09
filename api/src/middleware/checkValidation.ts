const { check, body, param } = require('express-validator')
const { validator } = require('express-validator')
import { Request, Response, NextFunction } from 'express'

const checkValidation = () => {
  return [body('kuba').isLength({ min: 4 })]
}

module.exports = checkValidation

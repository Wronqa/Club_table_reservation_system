import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'

exports.newOrder = async (req: Request, res: Response) => {
  const errors = validationResult(req)

  console.log(errors)
  res.status(200).json('okejh')
}

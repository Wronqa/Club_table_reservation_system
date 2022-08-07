import { Request, Response, NextFunction } from 'express'
const runQuery = require('../config/database')

exports.tablesController = async (req: Request, res: Response) => {
  try {
    const pool = await runQuery('Select * from "table";')
    console.log(pool)
  } catch (err) {
    console.log(err)
  }
  res.status(200).json('okej')
}

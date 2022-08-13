import { Request, Response, NextFunction } from 'express'
const runQuery = require('../config/database')
const { tableQueries } = require('../queries/tableQueries')

exports.getAllTables = async (req: Request, res: Response) => {
  try {
    const result = await runQuery(tableQueries.selectAll)

    res.status(200).json({
      success: true,
      error: null,
      data: result.recordsets,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
      data: null,
    })
  }
}

import { Request, Response } from 'express'

const runQuery = require('../config/database')
const { tableQueries } = require('../queries/tableQueries')
const moment = require('moment')
const tableFilter = require('../utils/tableFilter')

exports.getAllTables = async (req: Request, res: Response) => {
  const date = req.query.date

  try {
    if (!moment(date, 'YYYY-MM-DD', true).isValid()) throw 'Invalid date format'

    const tables = await runQuery(tableQueries.selectAll)

    const takenTables = await runQuery(tableQueries.selectTaken(date))
    const filteredTables = tableFilter(
      tables.recordsets,
      takenTables.recordsets
    )

    res.status(200).json({
      success: true,
      error: null,
      data: filteredTables,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
      data: null,
    })
  }
}

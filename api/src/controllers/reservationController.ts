import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'
const clientQueries = require('../queries/clientQueries')
const orderQueries = require('../queries/orderQueries')
const runQuery = require('../config/database')
const checkAvailability = require('../utils/availabilityChecker')

exports.newOrder = async (req: Request, res: Response) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(500).json({
      success: false,
      error: errors,
      data: null,
    })
  }

  const { personalData, reservationInfo } = req.body

  try {
    await checkAvailability(reservationInfo.table_id, reservationInfo.date)

    const client = await runQuery(clientQueries.insert(personalData))
    const id = client.recordsets[0][0]

    const result = await runQuery(
      orderQueries.insert({ ...reservationInfo, client_id: id.id })
    )

    res.status(200).json({
      success: true,
      error: null,
      data: 'Reservation successfully',
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      error: err,
      data: null,
    })
  }
}

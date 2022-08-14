import { tableQueries } from './../queries/tableQueries'
import { Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'
import { getReservationSummaryMessage } from '../templates/reservationSummaryMessage'
const clientQueries = require('../queries/clientQueries')
const orderQueries = require('../queries/orderQueries')
const runQuery = require('../config/database')
const checkAvailability = require('../utils/availabilityChecker')
const sendEmail = require('../utils/mailSender')
const { v4: uuidv4 } = require('uuid')
const formatName = require('../utils/tableNameFormatter')

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

    const public_id = uuidv4()

    const result = await runQuery(
      orderQueries.insert({
        ...reservationInfo,
        client_id: id.id,
        public_id,
      })
    )

    const table = await runQuery(
      tableQueries.selectTableName(reservationInfo.table_id)
    )

    const tableName = formatName(table)

    const message = getReservationSummaryMessage({
      name: personalData.name,
      phone: personalData.phoneNumber,
      tableName: tableName,
      date: reservationInfo.date,
      time: reservationInfo.time,
      link: `${process.env.CLIENT_URL}/${public_id}`,
    })

    const mail = await sendEmail({
      from: process.env.MAIL_USERNAME,
      to: personalData.emailAddress,
      subject: 'Your order confirmation',
      html: message,
    })

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

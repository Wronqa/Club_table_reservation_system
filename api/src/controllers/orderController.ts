import { tableQueries } from '../queries/tableQueries'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { getReservationSummaryMessage } from '../templates/reservationSummaryMessage'

const clientQueries = require('../queries/clientQueries')
const orderQueries = require('../queries/orderQueries')
const runQuery = require('../config/database')
const checkAvailability = require('../utils/availabilityChecker')
const sendEmail = require('../utils/mailSender')
const { v4: uuidv4 } = require('uuid')
const formatName = require('../utils/tableNameFormatter')
const escape = require('escape-html')

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

    await runQuery(
      orderQueries.insert({
        ...reservationInfo,
        client_id: id.id,
        public_id,
      })
    )

    const table = await runQuery(
      tableQueries.selectTableName(reservationInfo.table_id)
    )

    const tableName = formatName({
      name: table.recordset[0].name,
      seats: table.recordset[0].seats,
      price: table.recordset[0].price,
    })

    const message = getReservationSummaryMessage({
      name: personalData.name,
      phone: personalData.phoneNumber,
      tableName: tableName,
      date: reservationInfo.date,
      time: reservationInfo.time,
      link: `${process.env.CLIENT_URL}order/${public_id}`,
    })

    await sendEmail({
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

exports.getOrderDetails = async (req: Request, res: Response) => {
  const id = escape(req.params.id)

  try {
    const result = await runQuery(orderQueries.getDetails(id))

    const { seats, price, ...others } = result.recordset[0]

    const orderDetails = {
      ...others,
      tableName: formatName({
        name: others.tableName,
        seats: seats,
        price: price,
      }),
    }

    res.status(200).json({
      success: true,
      error: null,
      data: orderDetails,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
      data: null,
    })
  }
}

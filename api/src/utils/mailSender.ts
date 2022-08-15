import { CustomAuthenticationResponse } from 'nodemailer/lib/smtp-connection'
import { MailDetails as MailDetailsType } from './../types/types'
const nodemailer = require('nodemailer')

const sendEmail = async (details: MailDetailsType) => {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const mailOptions = {
    ...details,
  }

  transporter.sendMail(
    mailOptions,
    (err: Error, info: CustomAuthenticationResponse) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Email sent: ' + info.response)
      }
    }
  )
}

module.exports = sendEmail

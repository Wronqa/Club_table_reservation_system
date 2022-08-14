const nodemailer = require('nodemailer')

const sendEmail = async (details: any) => {
  ///zmien to any
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

  transporter.sendMail(mailOptions, (err: any, info: any) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

module.exports = sendEmail

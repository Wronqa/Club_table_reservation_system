const sql = require('mssql')
const config = require('./config/sqlConfig')

const connect = async () => {
  try {
    await sql.connect(config)
  } catch (err) {
    console.log(err)
  }
}

module.exports = connect

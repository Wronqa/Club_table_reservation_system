import { ConnectionPool } from 'mssql'

const sql = require('mssql')
const config = require('./sqlConfig')

const runQuery = (query: string) => {
  return sql.connect(config).then((pool: ConnectionPool) => {
    return pool.query(query)
  })
}
module.exports = runQuery

const runQuery = require('../config/database')
const tableQueries = require('../queries/tableQueries')

const checkAvailability = async (id: number, date: Date) => {
  const result = await runQuery(tableQueries.checkAvailability(id, date))

  if (result.rowsAffected[0] !== 0) {
    throw 'This table is not available'
  }
}
module.exports = checkAvailability

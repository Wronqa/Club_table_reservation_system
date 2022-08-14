const fs = require('fs')

export const tableQueries = {
  selectAll: fs.readFileSync(__dirname + '/selectTables.sql', 'utf-8'),
  selectTaken: (date: Date) => {
    return `SELECT table_id AS id FROM "Order" WHERE "date"='${date}';`
  },
  selectTableName: (id: number) => {
    return `SELECT name, seats,price FROM "Table" WHERE "id"=${id};`
  },
  checkAvailability: (id: number, date: Date) => {
    return `SELECT * FROM "Order" WHERE "date"='${date}' AND table_id=${id};`
  },
}

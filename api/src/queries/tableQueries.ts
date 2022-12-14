export const tableQueries = {
  selectAll: `SELECT * FROM "table";`,
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

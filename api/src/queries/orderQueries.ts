import { Order as OrderType } from '../types/types'

const orderQueries = {
  insert: (data: OrderType) => {
    return `INSERT INTO "Order" (date,time,table_id,client_id,comment,public_id) VALUES('${data.date}','${data.time}',${data.table_id},${data.client_id},'${data.comment}','${data.public_id}'); `
  },
  getDetails: (public_id: string) => {
    return `SELECT date, time, "Client".name as clientName, "Client".email, "Client".phone, "Table".name as tableName, "Table".price, "Table".seats 
    FROM "Order" 
    INNER JOIN "Table" ON "Table".id = "Order".table_id
    INNER JOIN "Client" ON "Client".id = "Order".client_id
    WHERE "Order".public_id = '${public_id}';`
  },
}

module.exports = orderQueries

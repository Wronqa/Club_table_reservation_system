import { OrderType } from '../types/types'

const orderQueries = {
  insert: (data: OrderType) => {
    return `INSERT INTO "Order" (date,time,table_id,client_id,comment,public_id) VALUES('${data.date}','${data.time}',${data.table_id},${data.client_id},'${data.comment}','${data.public_id}'); `
  },
}

module.exports = orderQueries

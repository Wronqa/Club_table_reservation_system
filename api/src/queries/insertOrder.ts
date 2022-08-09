import { OrderType } from '../types/types'

const insertOrder = (data: OrderType) => {
  return `INSERT INTO "Order" (date,time,table_id,client_id,comment) VALUES(${data.date},${data.time},${data.table_id},${data.client_id},${data.comment}); `
}

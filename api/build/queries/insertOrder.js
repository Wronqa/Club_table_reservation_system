"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insertOrder = (data) => {
    insert: `INSERT INTO "Order" (date,time,table_id,client_id,comment) VALUES(${data.date},${data.time},${data.table_id},${data.client_id},${data.comment}); `;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderQueries = {
    insert: (data) => {
        return `INSERT INTO "Order" (date,time,table_id,client_id,comment,public_id) VALUES('${data.date}','${data.time}',${data.table_id},${data.client_id},'${data.comment}','${data.public_id}'); `;
    },
    getDetails: (public_id) => {
        return `ime, "Client".name, "Client".email, "Client".phone, "Table".name, "Table".price, "Table".seats 
    FROM "Order" 
    INNER JOIN "Table" ON "Table".id = "Order".table_id
    INNER JOIN "Client" ON "Client".id = "Order".client_id
    WHERE "Order".public_id = '${public_id}';`;
    },
};
module.exports = orderQueries;

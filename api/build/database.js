"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require('mssql');
const sqlConfig = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    server: process.env.SERVER,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: true,
        trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
};
const runQuery = (query) => {
    return sql.connect(sqlConfig).then((pool) => {
        return pool.query(query);
    });
};
module.exports = runQuery;

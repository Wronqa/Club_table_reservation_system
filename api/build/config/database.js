"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require('mssql');
const config = require('./sqlConfig');
const runQuery = (query) => {
    return sql.connect(config).then((pool) => {
        return pool.query(query);
    });
};
module.exports = runQuery;

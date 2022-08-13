"use strict";
const fs = require('fs');
const query = {
    selectAll: fs.readFileSync(__dirname + '/selectTables.sql', 'utf-8'),
    selectFree: (date) => {
        'SELECT table_id FROM "Order" WHERE ';
    },
    check: (id, date) => {
        return `SELECT * FROM "Order" WHERE "date"='${date}' AND table_id=${id};`;
    },
};
module.exports = query;

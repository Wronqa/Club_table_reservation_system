"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableQueries = void 0;
exports.tableQueries = {
    selectAll: `SELECT * FROM "table";`,
    selectTaken: (date) => {
        return `SELECT table_id AS id FROM "Order" WHERE "date"='${date}';`;
    },
    selectTableName: (id) => {
        return `SELECT name, seats,price FROM "Table" WHERE "id"=${id};`;
    },
    checkAvailability: (id, date) => {
        return `SELECT * FROM "Order" WHERE "date"='${date}' AND table_id=${id};`;
    },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientQueries = (data) => {
    insert: `INSERT INTO "Client" (name,email,phone) VALUES(${data.name},${data.email},${data.phone}); `;
};
module.exports = clientQueries;

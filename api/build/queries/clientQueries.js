"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientQueries = {
    insert: (data) => {
        return `INSERT INTO "Client" (name,email,phone) VALUES('${data.name}','${data.emailAddress}','${data.phoneNumber}');  SELECT SCOPE_IDENTITY() AS id;`;
    },
};
module.exports = clientQueries;

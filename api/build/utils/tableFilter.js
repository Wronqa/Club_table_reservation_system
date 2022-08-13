"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tableFilter = (allTables, takenTables) => {
    const takenTablesArray = [...takenTables[0]].map((item) => item.id);
    // const freeTable =  [...allTables[0]].filter(
    //   (table) => !takenTablesArray.includes(table.id)
    // )
    return [...allTables[0]].map((table) => {
        if (takenTablesArray.includes(table.id))
            return Object.assign(Object.assign({}, table), { available: false });
        else {
            return Object.assign(Object.assign({}, table), { available: true });
        }
    });
};
module.exports = tableFilter;

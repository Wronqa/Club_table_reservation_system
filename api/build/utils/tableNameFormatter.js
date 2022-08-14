"use strict";
const formatName = (obj) => {
    ///zmien
    const record = obj.recordset[0];
    return `${record.name}  |  ${record.seats} Person  |  ${record.price} PLN`;
};
module.exports = formatName;

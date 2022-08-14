"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReservationSummaryMessage = void 0;
const getReservationSummaryMessage = (details) => {
    ///zmien
    return `<h1>Your order</h1>
    <p>Thank you for your order.</p> <br>
    <p><b> Date: </b> <i> ${details.date} </i></p> 
    <p><b> Time: </b> <i>${details.time}  </i></p> 
    <br>
    <p><b> ${details.tableName} </b> </p>
    <br>
    <p><b> Name: </b> <i>${details.name} </i></p>
    <p><b> Phone number: </b> <i>${details.phone} </i></p>

    <p> If you want to see details of order please click the link below </p>
    ${details.link}
    `;
};
exports.getReservationSummaryMessage = getReservationSummaryMessage;

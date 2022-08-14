"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const clientQueries = require('../queries/clientQueries');
const orderQueries = require('../queries/orderQueries');
const runQuery = require('../config/database');
const checkAvailability = require('../utils/availabilityChecker');
const sendEmail = require('../utils/mailSender');
const { v4: uuidv4 } = require('uuid');
exports.newOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(500).json({
            success: false,
            error: errors,
            data: null,
        });
    }
    const { personalData, reservationInfo } = req.body;
    try {
        yield checkAvailability(reservationInfo.table_id, reservationInfo.date);
        const client = yield runQuery(clientQueries.insert(personalData));
        const id = client.recordsets[0][0];
        const result = yield runQuery(orderQueries.insert(Object.assign(Object.assign({}, reservationInfo), { client_id: id.id, public_id: uuidv4() })));
        const mail = yield sendEmail({
            from: 'clubreservationsystem@gmail.com',
            to: 'kuba.wrona@onet.pl',
            subject: 'test',
            text: 'test',
        });
        res.status(200).json({
            success: true,
            error: null,
            data: 'Reservation successfully',
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            error: err,
            data: null,
        });
    }
});

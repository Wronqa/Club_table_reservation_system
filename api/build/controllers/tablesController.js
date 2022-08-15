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
const runQuery = require('../config/database');
const { tableQueries } = require('../queries/tableQueries');
const moment = require('moment');
const tableFilter = require('../utils/tableFilter');
exports.getAllTables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const date = req.query.date;
    try {
        if (!moment(date, 'YYYY-MM-DD', true).isValid())
            throw 'Invalid date format';
        const tables = yield runQuery(tableQueries.selectAll);
        const takenTables = yield runQuery(tableQueries.selectTaken(date));
        const filteredTables = tableFilter(tables.recordsets, takenTables.recordsets);
        res.status(200).json({
            success: true,
            error: null,
            data: filteredTables,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err,
            data: null,
        });
    }
});

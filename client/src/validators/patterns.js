"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.email = exports.onlyDigits = exports.hasNumber = void 0;
exports.hasNumber = /\d/;
exports.onlyDigits = new RegExp('^\\d+$');
exports.email = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

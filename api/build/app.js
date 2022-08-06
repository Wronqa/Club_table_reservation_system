"use strict";
const express = require('express');
const tablesRoute = require('./routes/tablesRoute');
const app = express();
app.use('./api/tables', tablesRoute);
module.exports = app;

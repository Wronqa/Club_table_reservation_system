"use strict";
require('dotenv').config({ path: __dirname + '/config/.env' });
const express = require('express');
const tablesRoute = require('./routes/tablesRoute');
const path = require('path');
const app = express();
app.use('/api/tables', tablesRoute);
module.exports = app;

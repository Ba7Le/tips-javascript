require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');

//init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

//init db
require('./dbs/init.mongodb');

//init routes
app.use('/', require('./routes/index'));

//handle error

module.exports = app;
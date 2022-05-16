const express = require('express');
const cors = require('cors');
const routes = require('./routes/v1/index');
const httpStatus = require('http-status');
const ApiError = require('./utils/ApiError')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.use('/v1', routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found TLS API'));
});

module.exports = app;

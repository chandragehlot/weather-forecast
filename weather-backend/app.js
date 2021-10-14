const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
require("dotenv").config();

const cityApiRoute = require('./routes/city');
var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(cors());
app.use(logger("dev"));

app.get('/api/v1/health-check', (req, res) => {
  res.send('weather backend api working fine')
})

app.use("/api/v1", cityApiRoute);


module.exports = app;
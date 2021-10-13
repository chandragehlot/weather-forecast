const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const apiRoute = require('./routes/city');
const dbConnect = require('./utils/mongo-connection');
var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));

dbConnect.connect();

app.get('/health-check', (req, res) => {
  res.send('weather backend api working fine')
})

app.use("/api/v1", apiRoute);


module.exports = app;
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var androidRouter = require('./routes/android.js');
var iosRouter = require('./routes/ios.js');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/android', androidRouter);
app.use('/ios', iosRouter);

module.exports = app;

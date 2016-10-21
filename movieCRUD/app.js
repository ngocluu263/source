/**
 * Created by Sandeep on 01/06/14.
 */

// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var movies = require('./routes/movies');
var mongoose = require('mongoose');

var app = express();

//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='movieDB';

var connectionString='mongodb://stdev:stdev@localhost:27017/'+dbName + ',{auth:{authdb:"admin"}}';

mongoose.connect(connectionString);

 allowCors = function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'Content-Type');
res.header('Access-Control-Allow-Credentials', 'true');
next();
};

app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', movies);

module.exports = app;

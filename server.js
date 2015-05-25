var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var url = 'mongodb://localhost:28017/jsGroup2';

var User;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.listen(3030, function () {
    console.log('Server start on port = 3030');
});

process.env.NODE_ENV = 'production';

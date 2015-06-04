var express = require('express');
var app = express();
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var url = 'mongodb://localhost:27017/jsGroup2';
var db;

mongoose.connect(url);
//db = mongoose.createConnection(url);
db = mongoose.connection;
db.once('open', function(){
    app.use(logger('dev'));
    app.use(bodyParser.json());

    app.use(express.static(__dirname + '/public'));

    require('./models/');
    require('./routes/')(app, db);

    app.listen(3030, function () {
        console.log('Server start on port = 3030');
    });

    process.env.NODE_ENV = 'production';
});

db.on('error', function(err){
    console.error(err);
});




var express = require('express');
var app = express();
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userUrl = 'mongodb://localhost:27017/JSGroup2';
//var postUrl = 'mongodb://localhost:27017/postDb';
var async = require('async');

function userConnect(callback){
    var userDb = mongoose.createConnection(userUrl, function(){
        callback(null, userDb);
    });
    userDb.on('error', function(err){
        callback(err);
    })
};

/*function postConnect(callback){
    var postDb = mongoose.createConnection(postUrl, function(){
        callback(null, postDb);
    });
    postDb.on('error', function(err){
        callback(err);
    })
};*/

var asyncObject = {
    userDb: userConnect
    /*postDb: postConnect*/
};

async.parallel(asyncObject, function(err, result){
    if(err){
        console.error(err);
        process.exit(1);
    }

    app.use(logger('dev'));
    app.use(bodyParser.json());

    require('./models/index.js');
    require('./routes/index.js')(app, result);

    app.listen(3030, function () {
        console.log('Server start on port = 3030');
    });
});

process.env.NODE_ENV = 'production';

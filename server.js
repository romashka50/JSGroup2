var express = require('express');
var app = express();
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userUrl = 'mongodb://localhost:27017/userDb';
var postUrl = 'mongodb://localhost:27017/postDb';
var async = require('async');

function userConnect(callback){
    var userDb = mongoose.createConnection(userUrl, function(){
        callback(null, userDb);
    });
    userDb.on('error', function(err){
        callback(err);
    })
};

function postConnect(callback){
    var postDb = mongoose.createConnection(postUrl, function(){
        callback(null, postDb);
    });
    postDb.on('error', function(err){
        callback(err);
    })
};

var asyncObject = {
    userDb: userConnect,
    postDb: postConnect
};

async.parallel(asyncObject, function(err, result){
    if(err){
        console.error(err);
        process.exit(1);
    }

    app.use(logger('dev'));
    app.use(bodyParser.json());

    require('./models/index.js');

    app.get('/', function (req, res, next) {

        console.log('----------------------------');

        res.status(200).send('qwerty');
    });

    app.post('/user', function (req, res, next) {
        var body = req.body;

        var User = mongoose.model('user');
        var user = new User(body);

        user.save(function (err, user) {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).send(user);
        });


    });

    app.get('/user', function (req, res, next) {

        var User = mongoose.model('user');

        User.find(function (err, users) {
            if (err) {
                return res.status(500).send(err)
            }

            res.status(200).send(users);
        });
    });

    app.listen(3030, function () {
        console.log('Server start on port = 3030');
    });
});

process.env.NODE_ENV = 'production';

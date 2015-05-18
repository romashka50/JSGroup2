var express = require('express');
var app = express();
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var url = 'mongodb://localhost:28017/jsGroup2';

mongoose.connect(url);

var db = mongoose.connection;

db.once('open', function () {
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

db.on('error', function (err) {
    console.error(err);
});

process.env.NODE_ENV = 'production';

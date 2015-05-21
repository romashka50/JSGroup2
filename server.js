var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var url = 'mongodb://localhost:28017/jsGroup2';
var Bookshelf = require('bookshelf');
var Knex = require('knex');
var knex;
var PostGre;
var User;

app.use(logger('dev'));
app.use(bodyParser.json());

knex = Knex({
    debug: true,
    client: 'pg',
    connection: {
        host: '192.168.88.250',
        user: 'postgres',
        password: 'postgres',
        port: '5432',
        database: 'jsGroup'
    }
});

PostGre = Bookshelf(knex);

User = PostGre.Model.extend({
    tableName: 'users',
    hasTimestamps: ['created_at', 'updated_at']
});

app.post('/user', function (req, res, next) {
    var body = req.body;
    var user = new User(body);
    user.save()
        .then(function (user) {
            res.status(200).send(user);
        }).otherwise(function (err) {
            res.status(500).send(err);
        });


});

app.get('/user', function (req, res, next) {

    User
        .forge()
        .fetchAll()
        .then(function (users) {
            res.status(200).send(users);
        }).otherwise(function (err) {
            res.status(500).send(err);
        });
});

app.listen(3030, function () {
    console.log('Server start on port = 3030');
});

process.env.NODE_ENV = 'production';

var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var url = 'mongodb://localhost:28017/jsGroup2';
var Bookshelf = require('bookshelf');
var Knex = require ('knex');
var knex;
var PostGre;

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

process.env.NODE_ENV = 'production';

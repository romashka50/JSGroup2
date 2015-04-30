/**
 * Created by Roman on 20.04.2015.
 */
var express = require('express');
var app = express();
process.env.NODE_ENV = 'production';

//var bodyparser = require('body-parser');

function chackIt(req, res, next) {
    console.log('we are the best');
    var err = new Error('Bad request in get Method');
    err.status = 403;
    next(err);
};

function errHandler(err, req, res, next) {
    var status = err.status || 500;
    var message;
    if(process.env.NODE_ENV === 'development'){
        message = err.message + '\n\r ' + err.stack;
    } else {
        message = err.message;
    }
    //ToDo check env production || development

    res.status(status).send(message);
    console.log();
};

//app.use(function (req, res, next) {
//    var ip = req.ip;
//    console.log(ip);
//    if (!/::|l27.0/.test(ip)) {
//        return next();
//    }
//    var err = new Error();
//    err.status = 404;
//    next(err);
//});
app.set('pupkin', {a: 2});
app.get('/:hero/:x/:y', function (req, res, next) {
    var hero = req.params.hero;
    var x = req.params.x;
    var y = req.params.y;

    res.status(200).send(app.get('pupkin'));
});

app.use(errHandler);

app.listen(3030, function () {
    console.log('Server start on port = 3030');
});
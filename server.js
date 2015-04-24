/**
 * Created by Roman on 20.04.2015.
 */
var express = require('express');
var app  = express();
var bodyparser = require('body-parser');

app.use(bodyparser.json());

app.get('/info', function(req, res, next){
    res.status(200).send({pupkin: 'Hello World'});
});

app.post('/info', function(req, res, next){
    var body = req.body;

    if(!body.key){
        var err = new Error('Not Key');

        return res.status(500).send({error: err.message + ' ' + err.stack});
    }
    res.status(200).send(body);
});

app.listen(3030, function(){
    console.log('Server start on port = 3030');
});
/**
 * Created by user on 5/18/15.
 */
var express = require('express');
var userRouter = express.Router();
var mongoose = require('mongoose');
var UserSchema = mongoose.Schemas['User'];

module.exports = function(db){
    var UserMode = db.model('user', UserSchema);

    userRouter.get('/', function(req, res, next){
        UserMode.find(function(err, users){
            if(err){
                return next(err);
            }

            res.status(200).send(users);
        });
    });

    userRouter.post('/', function(req, res, next){
        var body = req.body;
        var d = new Date();

        body._id = d.valueOf();

        var user = new UserMode(body);

        user.save(function(err, user){
            if(err){
                return next(err);
            }

            res.status(200).send(user);
        });
    });

    userRouter.delete('/:id', function(req, res, next){
        var id = req.params.id;

        UserMode.remove({_id: id}, function(err, user){
            if(err){
                return next(err);
            }

            res.status(200).send(user);
        });
    });

    return userRouter;
};


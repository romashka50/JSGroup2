/**
 * Created by user on 5/18/15.
 */
var express = require('express');
var postRouter = express.Router();
var mongoose = require('mongoose');
var PostSchema = mongoose.Schemas['Post'];

module.exports = function(db){
    var PostModel = db.model('post', PostSchema);

    postRouter.get('/', function(req, res, next){
        var query = PostModel.find();
        query.populate('owner');

        query.exec(function(err, users){
            if(err){
                return next(err);
            }

            res.status(200).send(users);
        });
    });

    postRouter.post('/', function(req, res, next){
        var body = req.body;
        var post = new PostModel(body);

        post.save(function(err, user){
            if(err){
                return next(err);
            }

            res.status(200).send(user);
        });
    });

    return postRouter;
};


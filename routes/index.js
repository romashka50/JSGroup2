/**
 * Created by user on 5/18/15.
 */
module.exports = function(app, dbsObject){
    var userRouter = require('./user.js')(dbsObject.userDb);
    var postRouter = require('./post.js')(dbsObject.userDb);

     app.get('/', function (req, res, next) {

       res.sendfile('index.html');
    });

    app.use('/user', userRouter);
    app.use('/post', postRouter);
};
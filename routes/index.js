/**
 * Created by user on 5/18/15.
 */
module.exports = function(app, db){
    var userRouter = require('./user.js')(db);
    var postRouter = require('./post.js')(db);

     app.get('/', function (req, res, next) {

       res.sendfile('index.html');
    });

    app.use('/user', userRouter);
    app.use('/post', postRouter);
};
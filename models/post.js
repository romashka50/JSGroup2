/**
 * Created by user on 5/18/15.
 */
/**
 * Created by Roman on 14.05.2015.
 */
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = (function() {
    var Schema = mongoose.Schema;
    var PostSchema = new Schema({
        name: {type: String, required: true},
        owner: {type: ObjectId, ref: 'user', default: null}
    }, {collection: 'Posts'});

    if(!mongoose.Schemas){
        mongoose.Schemas = {};
    }
    mongoose.Schemas['Post'] = PostSchema;
})();
/**
 * Created by Roman on 14.05.2015.
 */
var mongoose = require('mongoose');

module.exports = (function() {
    var Schema = mongoose.Schema;
    var UserSchema = new Schema({
        _id: Number,
        name: {
            first: {type: String, required: true},
            last: {type: String, default: 'Pupkin'}
        },
        age: Number
    }, {collection: 'Users'});

    if(!mongoose.Schemas){
        mongoose.Schemas = {};
    }
    mongoose.Schemas['User'] = UserSchema;
})();
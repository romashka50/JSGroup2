/**
 * Created by Roman on 04.06.2015.
 */
define(['models/user'], function(UserModel){
    var Users = Backbone.Collection.extend({
        model: UserModel,

        url: '/user/'
    });

    return Users;
});
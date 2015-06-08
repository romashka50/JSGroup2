/**
 * Created by Roman on 04.06.2015.
 */
define(['models/user'], function(UserModel){
    var Users = Backbone.Collection.extend({
        model: UserModel,

        initialize: function(){
            this.fetch({
                reset: true
            });
        },

        url: '/user/'
    });

    return Users;
});
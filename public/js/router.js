/**
 * Created by Roman on 25.05.2015.
 */
define(['Backbone'], function(Backbone){
    var Router = Backbone.Router.extend({
        routes: {
            "index" : "index",
            "user(/:userId)": "user",
            '*any': 'index'
        },

        user: function(userId){
            alert('usr router ' + userId);
        },

        index: function(){
            alert('index router');
        }
    });

    return Router;
});
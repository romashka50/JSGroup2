/**
 * Created by Roman on 25.05.2015.
 */

define(/*@Parrameters dependencies*/['Backbone', 'router'], function(Backbone, Router){

    var router = new Router();

    if(!Backbone.history.fragment){
        Backbone.history.start({silent: true});
        Backbone.history.navigate('user', {trigger: true});
        //window.location.hash = '#user';
    } else {
        Backbone.history.fragment = '';
    }



    return {
        a: 1,
        b: 10
    }
});
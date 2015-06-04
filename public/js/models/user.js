/**
 * Created by Roman on 04.06.2015.
 */
define([], function(){
    var User = Backbone.Model.extend({
        idAttribute: '_id',
        /*url:  function(){
            return '/user/' + this.get('age') + '/' + this.id
        }*/
        urlRoot: function(){
            return '/user/'
        }
    });

    return User;
});

//GET - fetch //
//POST  Model.save
//PUT model.save
//PATCH
//DELETE
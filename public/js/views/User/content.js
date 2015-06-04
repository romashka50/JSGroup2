/**
 * Created by Roman on 28.05.2015.
 */
/**
 * Created by Roman on 28.05.2015.
 */
define([
    'text!templates/User/content.html',
    'models/user',
    'collections/users'
], function (content, UserModel, UserCollection) {
    var mainView = Backbone.View.extend({
        el: '#contentHolder',

        template: _.template(content),

        events: {
            'click #saveBtn' : 'saveUser',
            'click .remove' : 'removeUser'
        },

        initialize: function () {
            this.collection = new UserCollection();
            this.collection.fetch({
                reset: true
            });
            this.collection.bind('reset', this.render, this);
    },

        saveUser: function(e){
            var el = this.$el;
            var model = new UserModel();
            var firstName = el.find('#first').val();
            var lastName = el.find('#last').val();
            var age = el.find('#age').val();

            var data = {
                name: {
                    first: firstName,
                    last: lastName
                },
                age: age
            };
            model.save(data, {
                success: function(model){
                    Backbone.history.fragment = '';
                    Backbone.history.navigate('jsGroup/User', {trigger: true});
                },
                error: function(err, xhr, model){
                    alert(xhr);
                }
            });
        },

        removeUser: function(e){
            var id = $(e.target).attr('id');
            var model = this.collection.get(id);

            model.destroy({
                success: function(model){
                    Backbone.history.fragment = '';
                    Backbone.history.navigate('jsGroup/User', {trigger: true});
                },
                error: function(err, xhr, model){
                    alert(xhr);
                }
            });
        },

        render: function () {
            var collection = this.collection.toJSON();
            this.$el.html(this.template({collection: collection}));

            return this;
        }
    });

    return mainView;
});
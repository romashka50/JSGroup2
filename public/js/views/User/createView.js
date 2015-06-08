/**
 * Created by Roman on 08.06.2015.
 */
/**
 * Created by Roman on 28.05.2015.
 */
/**
 * Created by Roman on 28.05.2015.
 */
define([
    'text!templates/User/create.html',
    'models/user'
], function (content, UserModel) {
    var mainView = Backbone.View.extend({
        el: '#createHolder',

        template: _.template(content),

        events: {
            'click #saveBtn' : 'saveUser'
        },

        initialize: function () {
           this.render();
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

        render: function () {
            var templateHtml = this.template();

            this.$el = $(templateHtml).dialog({
                width: '900px',
                modal: true
            });

            return this;
        }
    });

    return mainView;
});
/**
 * Created by Roman on 28.05.2015.
 */
/**
 * Created by Roman on 28.05.2015.
 */
define([
    'text!templates/User/content.html',
    'collections/users'
], function (content, UserCollection) {
    var mainView = Backbone.View.extend({
        el: '#contentHolder',

        template: _.template(content),

        events: {
            'click .remove': 'removeUser'
        },

        initialize: function (optins) {
            this.collection = optins.collection;

            this.render();
        },

        removeUser: function (e) {
            var id = $(e.target).attr('id');
            var model = this.collection.get(id);

            model.destroy({
                success: function (model) {
                    Backbone.history.fragment = '';
                    Backbone.history.navigate('jsGroup/User', {trigger: true});
                },
                error: function (err, xhr, model) {
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
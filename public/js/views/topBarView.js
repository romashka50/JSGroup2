/**
 * Created by Roman on 28.05.2015.
 */
define([
    'text!templates/topBarTemplate.html',
], function (topBarTemplate) {
    var mainView = Backbone.View.extend({
        el: '#topBar',

        template: _.template(topBarTemplate),

        events: {
            "click #user": "goToUser",
            "click #post": "goToPost"
        },

        initialize: function () {
            this.render();
        },

        goToUser: function(e){
            e.preventDefault();
            e.stopPropagation();

            var targetEl = $(e.target);
            var hash = targetEl.data('hash');
            hash = 'jsGroup/' + hash;

            Backbone.history.navigate(hash, {trigger: true});
        },
        goToPost: function(e){
            e.preventDefault();

            var targetEl = $(e.target);
            var hash = targetEl.data('hash');
            hash = 'jsGroup/' + hash;

            Backbone.history.navigate(hash, {trigger: true});
        },

        render: function () {
            //$(#content).html();
            this.$el.html(this.template());

            return this;
        }
    });

    return mainView;
});
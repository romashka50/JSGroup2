/**
 * Created by Roman on 28.05.2015.
 */
define([
    'text!templates/mainViewTemplate.html',
    'views/topBarView'
], function (mainTemplate, topBarView) {
    var mainView = Backbone.View.extend({
        el: '#content',

        template: _.template(mainTemplate),

        initialize: function () {
            this.render();
        },

        render: function () {
            //$(#content).html();
            this.$el.html(this.template());

            var topBar = new topBarView();

            return this;
        }
    });

    return mainView;
});
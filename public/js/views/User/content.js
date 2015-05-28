/**
 * Created by Roman on 28.05.2015.
 */
/**
 * Created by Roman on 28.05.2015.
 */
define([
    'text!templates/User/content.html'
], function (content) {
    var mainView = Backbone.View.extend({
        el: '#contentHolder',

        template: _.template(content),

        events: {

        },

        initialize: function () {
            this.render();
        },


        render: function () {
            //$(#content).html();
            this.$el.html(this.template());

            return this;
        }
    });

    return mainView;
});
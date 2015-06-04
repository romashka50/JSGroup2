/**
 * Created by Roman on 25.05.2015.
 */
define([
    'Backbone',
    'views/mainView'
], function (Backbone, mainView) {
    var Router = Backbone.Router.extend({

        mainView: null,
        contentView: null,

        routes: {
            "index": "index",
            "jsGroup/:Content": "getContent",
            '*any': 'index'
        },

        getContent: function (Content) {
            var contentViewUrl = 'views/' + Content + '/content';
            var self = this;

            require([contentViewUrl], function(contentViewUrl){
                if(self.contentView){
                    self.contentView.undelegateEvents();
                }

                self.contentView = new contentViewUrl();
            });
        },

        index: function () {
            if (!this.mainView) {
                this.mainView = new mainView();
            }
        }
    });

    return Router;
});
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
            var contentCollection = 'collections/' + Content.toLowerCase() + 's';
            var self = this;

            require([contentCollection, contentViewUrl], function(Collection, contentView){
                var collection = new Collection();

                var f = self.changeContenView.bind(self, contentView, collection);

                collection.on('reset', f, self);
            });
        },

        changeContenView: function(view, collection){
            if(this.contentView){
                this.contentView.undelegateEvents();
            }

            this.contentView = new view({collection: collection});
        },

        index: function () {
            if (!this.mainView) {
                this.mainView = new mainView();
            }
        }
    });

    return Router;
});
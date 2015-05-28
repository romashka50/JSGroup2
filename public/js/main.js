/**
 * Created by Roman on 25.05.2015.
 */
var App = App ||  {  };

require.config({
    paths: {
        jQuery: './libs/jquery',
        Underscore: './libs/underscore',
        Backbone: './libs/backbone',
        views: './views',
        text: './libs/text',
        templates: '../templates'
    },
    shim: {
        'Backbone': ['Underscore', 'jQuery'],
        'app': ['Backbone']
    }
});

require(['app'], function(app){
    app.init();
});
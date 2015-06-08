/**
 * Created by Roman on 25.05.2015.
 */
var App = App ||  {  };

require.config({
    paths: {
        jQuery: './libs/jquery/dist/jquery',
        Underscore: './libs/underscore/underscore',
        Backbone: './libs/backbone/backbone',
        views: './views',
        models: './models',
        collections: './collections',
        text: './libs/text/text',
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
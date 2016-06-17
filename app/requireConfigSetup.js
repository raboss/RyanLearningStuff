require.config({
    paths: {
        'jquery': '../libs/jquery/jquery',
        'underscore': '../libs/underscore/underscore',
        'backbone': '../libs/backbone/backbone',
        'marionette': '../libs/marionette/lib/backbone.marionette'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        }
    }
});

define([
    'marionette',
    'backbone',
    'controllers/controller',
    'layout'
], function(
    Marionette,
    Backbone,
    Controller,
    Layout
) {
    var app = new Marionette.Application();

    var Controller = new Controller({app: app});
    app.layout = new Layout({
        el: '#x-app-main'
    });
    app.layout.render();
    app.addInitializer(function () {
        Backbone.history.start();
    });
    return app;
});

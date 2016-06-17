define([
    'marionette'
], function(Marionette) {
    return Marionette.AppRouter.extend({
        routes: {
            'test': 'onRoute'
        },
        onRoute: function() {
            alert('test');
        },
        initialize: function(options) {
            this.app = options.app;
        }
    });
});

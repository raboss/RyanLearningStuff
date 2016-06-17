define([
    'marionette',
    'underscore'
], function(
    Marionette,
    _
) {
    return Marionette.Layout.extend({
        template: _.template('<div> test </div>')
    });
});

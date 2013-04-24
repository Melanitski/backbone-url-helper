function(){

    var _applyDefaultParams = function(options) {
        return _.extend({
            trigger: true
        }, options);
    };

    Backbone.Router.prototype.to = function(route, params, options) {
        var _self = this;
        _.each(this.routes, function(routeName, routeUrl) {
            if (route === routeName) {
                Art.routing.navigate( _self._generateUrl(routeUrl, params), _applyDefaultParams(options) );
            }
        });
    };

    Backbone.Router.prototype._generateUrl = function(routeUrl, routeParams) {
        _.each(routeParams, function(value, key) {
            routeUrl = routeUrl.replace(':' + key, value);
        });
        return '/' + routeUrl;
    };

})();

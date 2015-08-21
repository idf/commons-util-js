/**
 * Created by Danyang on 2/2/2015.
 */
(function() {
    "use strict";
    /**
     * Module
     * Module dependencies: ''
     * @type {module}
     */
    angular.module('app', [
        /* Shared Modules */
        'filters',

        /* 3rd party */

        /* Function Modules */
        'app.controllers',
        'app.directives'

    ]).config(['$interpolateProvider', function($interpolateProvider) {
      $interpolateProvider.startSymbol('{{');  // default
      $interpolateProvider.endSymbol('}}');
    }]);
})();
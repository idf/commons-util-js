/**
 * Created by Daniel on 13/08/15.
 */
(function() {
  "use strict";
  /**
   * Module
   * Module dependencies: 'store-directives'
   * @type {module}
   */
  var app = angular.module('app.controllers', []);

  /**
   * Data load controller
   * Dependency Injection $http
   */
  app.controller('mainController', ["$http", "$scope", "dataService", function($http, $scope, dataSvr){
    var vm = this;
    // attribute
    vm.keywords = null;

    // functions
    vm.tag = tag;

    function tag() {
      dataSvr.prepForBroadcast(vm.text);
      $scope.$on('dataReady', function() {
        vm.keywords = dataSvr.msg["keywords"];
      });
    }
  }]);

  app.factory('dataService', ["$http", "$rootScope", function($http, $rootScope) {
    var sharedService = {};
    sharedService.prepForBroadcast = prepForBroadcast;

    function prepForBroadcast(str) {
      $rootScope.$broadcast('prepForBroadcast');
      $http({
        method: 'POST',
        url: '/',
        data: {text: str}
      }).success(function(data) {
        sharedService.msg = data;
        $rootScope.$broadcast('dataReady');
      });
    }

    return sharedService;
  }]);
})();
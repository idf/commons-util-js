/**
 * Created by Daniel on 13/08/15.
 */
(function() {
  'use strict';
  /**
   * Module
   * Module dependencies: 'app.directives'
   * @type {module}
   */
  var app = angular.module('app.controllers', []);

  /**
   * Data load controller
   * Dependency Injection $http
   */
  app.controller('mainController', ['$http', '$scope', 'dataService', function($http, $scope, dataSrv){
    var vm = this;
    // attribute
    vm.field = null;

    // functions
    vm.fetch = fetch;

    function fetch() {
      dataSrv.prepForBroadcast('POST', '/', vm.text);
      $scope.$on('dataReady', function() {
        vm.field = dataSrv.msg['attr'];
      });
    }

    $scope.$watch(function() {
      return vm.field;
    }, function(newValue, oldValue) {
      // do something
    }, true);

  }]);

  app.factory('dataService', ['$http', '$rootScope', function($http, $rootScope) {
    // service does not this or vm.
    var sharedService = {};
    sharedService.prepForBroadcast = prepForBroadcast;

    function prepForBroadcast(method, url, data) {
      $rootScope.$broadcast('prepForBroadcast');
      $http({
        method: method,
        url: url,
        data: data
      }).success(function(data) {
        sharedService.msg = data;
        $rootScope.$broadcast('dataReady');
      });
    }

    return sharedService;
  }]);
})();
/**
 * Created by Daniel on 13/08/15.
 *
 * For DOM manipulation, use directives. View is the "official record".
 */
(function() {
  'use strict';
  var app = angular.module('app.directives', []);

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  /**
   * Usage:
   * <button confirm-click="sessionCtrl.deleteSession(session.id)" confirmation="Are you sure?">Delete</button>
   */
  app.directive('confirmClick', function() {
    return {
      restrict: 'A',
      link: function(scope, elt, attrs) {
        elt.bind('click', function(e) {
          var message = attrs.confirmation || 'Are you sure you want to do this?';
          if (window.confirm(message)) {
            var action = attrs.confirmClick;
            if (action)
              scope.$apply(scope.$eval(action));
          }
        });
      }
    };
  });

  /**
   * ^: Locate the required controller by searching the element and its parents. Throw an error if not found.
   * https://code.angularjs.org/1.3.0/docs/api/ng/service/$compile#-require-
   */
  app.directive('pagination', function () {
    return {
      restrict: 'E',
      templateUrl: 'pagination.html',
      require: '^searchCtrl'
    };
  });

  function getDirectiveDir(rootDir) {
    return rootDir+'path/to/snippets/';
  }

  /**
   * rootDir is the app's constant
   */
  app.directive('searchResult', ['rootDir', function(rootDir) {
    return {
      restrict: 'E',
      templateUrl: getDirectiveDir(rootDir)+'search_result.html',
      require: '^Controller',
      controllerAs: 'ctrl'
    };
  }]);


})();
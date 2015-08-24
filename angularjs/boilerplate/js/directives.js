/**
 * Created by Daniel on 13/08/15.
 *
 * For DOM manipulation, use directives - View is the "official record".
 * Directive is the extension of HTML (part of HTML)
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
      /**
       * link declares the controllers specifically for this directieve
       * @param scope, controller's scope
       * @param elt, the entire the HTML tag
       * @param attrs, the attributes of the HTML
       */
      link: function(scope, elt, attrs) {
        elt.bind('click', function(e) {
          var message = attrs.confirmation || 'Are you sure you want to do this?';
          if (window.confirm(message)) {
            var action = attrs.confirmClick;  // binding the 'confirm-click' attribute
            if (action) {
              scope.$apply(scope.$eval(action));
            }
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


  /**
   * A controller dedicated to a directive
   */
  app.directive( 'toggle', function () {
    return {
      scope: true,
      template: '<a class="btn" ng‐class="{active: on}" ng‐click="toggle()">Toggle me! </a>',
      link: function ( scope, elt, attrs ) {
        scope.on = false;
        scope.toggle = function () {
          scope.on = !scope.on;
        };
      }
    };
  });

})();
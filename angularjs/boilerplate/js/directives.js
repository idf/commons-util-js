/**
 * Created by Daniel on 13/08/15.
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


})();
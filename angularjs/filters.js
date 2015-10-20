/**
 * Created by Danyang on 2/4/2015.
 */
(function() {
  'use strict';
  var app = angular.module('filters', ['ngSanitize']);

  /**
   * Avoid auto escape of html
   *
   * Usage:
   * <div ng-bind-html='something_with_html_tags | sanitize'></div>
   */
  app.filter('nonescape', ['$sce', function($sce) {
    return function(htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };
  }]);

  app.filter('sanitize', ['$sanitize', function($sanitize) {
    return function(str) {
      return $sanitize(str);
    };
  }]);

  app.filter('reverse', function() {
    return function(text) {
      return text.split('').reverse().join('');
    };
  });

  app.filter('whitespace', function () {
    return function(text) {
      return text.replace('_', ' ');
    };
  });

  app.filter('numberWithComma', function() {
    return function(number) {
      if (number === null) {
        return "";
      }
      var text = String(number);
      return text.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
  });

  app.filter('isEmpty', function () {
    return function (obj) {
      for (var bar in obj) {
        if (obj.hasOwnProperty(bar)) {
          return false;
        }
      }
      return true;
    };
  });

  function charEscape(charCode) {
    return "\\x" + charCode.toString(16);
  }

  function escapeSlash(str) {
    return str
        .replace(/[\\]/g, '\\\\')
        .replace(/[\"]/g, '\\\"')
        .replace(/[\/]/g, '\\/')
        .replace(/[\b]/g, '\\b')
        .replace(/[\f]/g, '\\f')
        .replace(/[\n]/g, '\\n')
        .replace(/[\r]/g, '\\r')
        .replace(/[\t]/g, '\\t');
  }

  function padWithLeadingZeros(string) {
    return new Array(5 - string.length).join("0") + string;
  }

  function unicodeCharEscape(charCode) {
    return "\\u" + padWithLeadingZeros(charCode.toString(16));
  }

  function unicodeEscape(string) {
    return string.split("")
        .map(function (char) {
          var charCode = char.charCodeAt(0);
          return charCode > 127 ? unicodeCharEscape(charCode) : char;
        })
        .join("");
  }

  app.filter('unicodeescape', function() {
    return function(str) {
      return unicodeEscape(str);
    };
  });

})();

'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
    .directive('layout', function() {
        console.log('in 1 la');
        return {

            link: function(scope, elm, attrs) {
                var layout = elm.layout({ applyDefaultStyles: true });

                scope.layout  = layout;
                console.log('in la');
                scope.$watch(attrs.state, function(state) {
                    if (state == true) {
                        scope.layout.sizePane('east', 120);
                        scope.layout.show('west');
                        scope.layout.show('south');
                    } else {
                        scope.layout.sizePane('east', 60);
                        scope.layout.hide('west');
                        scope.layout.hide('south');
                    }
                });
            }
        };
    })

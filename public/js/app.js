'use strict';


// Declare app level module which depends on filters, and services
//angular.module('myApp', ['myApp.directives', 'myApp.services', 'ui'   ,'ui.bootstrap','myApp.filters'])
// ,'ui.bootstrap'        ,'ui

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives' ,'ui'  ]).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2', controller: MyCtrl2});
    // $routeProvider.when('/faq', {        templateUrl:'partials/faq',        controller:FaqCtrl });
    $routeProvider.otherwise({redirectTo: '/view1'});
    $locationProvider.html5Mode(true);
}]);

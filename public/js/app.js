'use strict';


// Declare app level module which depends on filters, and services
// var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
var app = angular.module('myApp', [,'myApp.filters' ,'myApp.services','myApp.directives',  'ui'   ,'ui.bootstrap']).


    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/view1', {templateUrl: 'partials/partial1', controller: MyCtrl1}).
    when('/view2', {templateUrl: 'partials/partial2', controller: MyCtrl2}).
    when('/faq',   {templateUrl:'partials/faq', controller:FaqCtrl}).
    when('/select2',   {templateUrl:'partials/select2', controller:Select2Ctrl}).
    otherwise({redirectTo: '/view1'});
    $locationProvider.html5Mode(true);
  }]);

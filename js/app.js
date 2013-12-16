'use strict';

var myApp = angular.module('hunear', ['hunear.services','localization','ajoslin.mobile-navigate','ngMobile','shoppinpal.mobile-menu'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {  
          
        $routeProvider.when('/', {templateUrl: 'views/login.html'});
        $routeProvider.when('/login-iframe', {templateUrl: 'views/login-iframe.html'});

        $routeProvider.otherwise({redirectTo: '/'});
  }]);

myApp.config(['$httpProvider', function($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);
'use strict';

(function () {

  var app = angular.module('ks', ['ngRoute', 'angularFileUpload']);

  app.config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {templateUrl: '/html/category-list.html'})
        .when('/category/:categoryId', {templateUrl: '/html/category.html'})
        .when('/profile', {templateUrl: '/html/profile.html'})
        .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode({ enabled: true, requireBase: false });

    }]);



})();

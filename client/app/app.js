'use strict';

angular.module('fourthAppApp', ['fourthAppApp.auth', 'fourthAppApp.admin', 'fourthAppApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });

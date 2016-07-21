'use strict';

angular.module('fourthAppApp.auth', ['fourthAppApp.constants', 'fourthAppApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

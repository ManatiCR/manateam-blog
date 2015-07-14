'use strict';

angular.module('manatiBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/:lang?page',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

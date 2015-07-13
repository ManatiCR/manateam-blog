'use strict';

angular.module('manatiBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/?page',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });

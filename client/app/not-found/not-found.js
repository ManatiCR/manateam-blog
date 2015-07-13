'use strict';

angular.module('manatiBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('not-found', {
        url: '/not-found',
        templateUrl: 'app/not-found/not-found.html',
        controller: 'NotFoundCtrl'
      });
  });
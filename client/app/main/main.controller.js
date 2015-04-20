'use strict';

angular.module('manatiBlogApp')
  .controller('MainCtrl', function ($scope,dataFactory) {
      $scope.posts = [];
      dataFactory.getPosts().then(function(data){
        $scope.posts = data;
      });
  });

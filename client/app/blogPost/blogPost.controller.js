'use strict';

angular.module('manatiBlogApp')
  .controller('BlogPostCtrl', function ($scope,$stateParams,dataFactory) {
    $scope.post = [];
    dataFactory.getPostById($stateParams.id).then(function(data){
      $scope.post = data[0];
    });
  });

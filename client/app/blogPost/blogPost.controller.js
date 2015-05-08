'use strict';

angular.module('manatiBlogApp')
  .controller('BlogPostCtrl', function ($scope,$stateParams,dataFactory) {
    $scope.post = [];
    dataFactory.getPostById($stateParams.id, $stateParams.lang).then(function(data){
      $scope.post = data[0];
    });
  });

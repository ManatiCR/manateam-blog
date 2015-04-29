'use strict';

angular.module('manatiBlogApp')
  .controller('MainCtrl', function ($scope,$stateParams,dataFactory) {
      $scope.posts = [];
      console.log($stateParams.page);
      dataFactory.getPosts($stateParams.page).then(function(data){
        $scope.posts = data;
      });
  });

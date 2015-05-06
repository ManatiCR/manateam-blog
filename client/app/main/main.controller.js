'use strict';

angular.module('manatiBlogApp')
  .controller('MainCtrl', function ($scope,$stateParams,dataFactory,$translate) {
      $scope.posts = [];
      $translate.use();
      $scope.setLanguage = function(lang){
        console.log(lang);
        $translate.use(lang);
      };


      console.log($stateParams.page);
      dataFactory.getPosts($stateParams.page).then(function(data){
        $scope.posts = data;
      });
  });

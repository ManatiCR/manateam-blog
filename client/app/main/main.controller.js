'use strict';

angular.module('manatiBlogApp')
.controller('MainCtrl', function ($scope, $stateParams, dataFactory,$translate, $rootScope) {
  $scope.posts = [];
  $scope.language = 'en';
  function getData(langCode, pageNumber){
    dataFactory.getPosts(langCode, pageNumber).then(function(data){
      $scope.posts = data;
    });
  }
  if ($translate.use() === 'es') {
    $scope.language = 'es';
  }
  else if($translate.use() === 'en'){
    $scope.language = 'en';
  }

  $rootScope.$on('$translateChangeSuccess', function(){
    getData($translate.use(),$stateParams.page);
  });
  getData($scope.language,$stateParams.page);
});

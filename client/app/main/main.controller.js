'use strict';

angular.module('manatiBlogApp')
.controller('MainCtrl', function ($scope, $stateParams, dataFactory,$translate, $rootScope) {
  // Set initial variables.
  $scope.posts = [];
  $scope.language = 'en';
  $scope.loadingFinished = false;
  $scope.pageLength = 3;
  $scope.pages = [];
  $scope.page = $stateParams.page ? parseInt($stateParams.page) : 1;

  /**
   * Get required data from factory.
   */
  function getData(langCode, pageNumber){
    dataFactory.getPosts(langCode, pageNumber - 1).then(function(data){
      $scope.posts = data;
      $scope.loadingFinished = true;
    });
  }

  /**
   * Get pages count and populate pages array..
   */
  function getCount(langCode){
    $scope.pages = [];
    dataFactory.getPostCount(langCode).then(function(data){
      $scope.pageCount = Math.ceil(data.length / $scope.pageLength);
      for (var i=1; i<=$scope.pageCount; i++) {
        $scope.pages.push(i);
      }
    });
  }

  /**
   * Set language according to translate.
   */
  if ($translate.use() === 'es') {
    $scope.language = 'es';
  }
  else if($translate.use() === 'en'){
    $scope.language = 'en';
  }

  /**
   * On translate change, pull data and count.
   */
  $rootScope.$on('$translateChangeSuccess', function(){
    getData($translate.use(),$stateParams.page);
    getCount($translate.use());
  });

  /**
   * Pull initial data and count.
   */
  getData($scope.language, $stateParams.page);
  getCount($scope.language);
});

'use strict';

angular.module('manatiBlogApp')
.controller('MainCtrl', function ($scope, $stateParams, dataFactory,$translate, $rootScope) {
  // Set initial variables.
  $scope.posts = [];
  $scope.language = '';
  $scope.pageLength = 3;
  $scope.pages = [];
  $scope.page = $stateParams.page ? parseInt($stateParams.page) : 1;

  /**
   * Get required data from factory.
   */
  function getData(langCode, pageNumber){
    if (pageNumber > 0) {
      pageNumber -= 1;
    }
    dataFactory.getPosts(langCode, pageNumber).then(function(data){
      $scope.posts = data;
    });
  }

  /**
   * Get pages count and populate pages array..
   */
  function getCount(langCode){
    dataFactory.getPostCount(langCode).then(function(data){
      $scope.pageCount = Math.ceil(data.length / $scope.pageLength);
      $scope.pages = [];
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
  if ($stateParams.lang) {
    $translate.use($stateParams.lang);
  }
  else {
    $translate.use('en');
  }
});

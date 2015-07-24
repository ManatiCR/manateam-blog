'use strict';

angular.module('manatiBlogApp')
.controller('MainCtrl', function ($scope, $stateParams, dataFactory, $translate, $state) {
  // Set initial variables.
  $scope.posts = [];
  $scope.loadingFinished = false;
  $scope.pageLength = 3;
  $scope.pages = [];
  if (!$stateParams.lang) {
    $state.go('main', {lang: 'en'});
  }
  $scope.language = $stateParams.lang;
  $scope.page = $stateParams.page ? parseInt($stateParams.page) : 1;

  /**
   * Get required data from factory.
   */
  var getData = function(langCode, pageNumber) {
    if (pageNumber > 0) {
      pageNumber -= 1;
    }
    dataFactory.getPosts(langCode, pageNumber).then(function(data) {
      $scope.posts = data;
      if (!$scope.posts.length) {
        $state.go('not-found');
      }
    })
    .finally(function() {
       $scope.loadingFinished = true;
    });
  };

  /**
   * Get pages count and populate pages array..
   */
  var getCount = function(langCode){
    dataFactory.getPostCount(langCode).then(function(data) {
      $scope.pageCount = Math.ceil(data.length / $scope.pageLength);
      $scope.pages = [];
      for (var i=1; i<=$scope.pageCount; i++) {
        $scope.pages.push(i);
      }
    });
  };

  /**
   * Pull initial data and count.
   */
  $translate.use($scope.language);
  getData($translate.use(), $stateParams.page);
  getCount($translate.use());

});

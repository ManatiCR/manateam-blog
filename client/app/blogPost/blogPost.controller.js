'use strict';

angular.module('manatiBlogApp')
  .controller('BlogPostCtrl', function ($scope,$rootScope,$stateParams,dataFactory, $translate) {
    $scope.post = [];
    function getPostByid(id, lang){
      dataFactory.getPostById(id,lang).then(function(data){
        $scope.post = data[0];
     });
    }
    $rootScope.$on('$translateChangeSuccess', function(){
      getPostByid($stateParams.id,$translate.use());
    });
    getPostByid($stateParams.id, $stateParams.lang);

  });

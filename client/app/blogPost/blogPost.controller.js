'use strict';

angular.module('manatiBlogApp')
  .controller('BlogPostCtrl', function ($scope,$rootScope,$stateParams,dataFactory, $translate, $state) {
    $scope.post = [];
    $scope.langReverted = false;
    function getPostByid(id, lang){
      dataFactory.getPostById(id,lang).then(function(data){
        if (data[0] != undefined) {
          $scope.post = data[0];
          $scope.langReverted = false;
        }
        else if (!$scope.langReverted) {
          $scope.langReverted = true;
          var newLang = lang == 'es' ? 'en' : 'es';
          $translate.use(newLang);
        }
        else {
        }
     }).catch (function(e) {
         if (e.status == 404) {
           $scope.langReverted = false;
           $state.go('not-found');
         }
     });
    }
    $rootScope.$on('$translateChangeSuccess', function(){
      getPostByid($stateParams.id,$translate.use());
    });
    getPostByid($stateParams.id, $stateParams.lang);

  });

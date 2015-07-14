'use strict';

angular.module('manatiBlogApp')
  .controller('BlogPostCtrl', function ($scope,$rootScope,$stateParams,dataFactory, $translate, $state) {
    $scope.post = [];
    function getPostByid(id, lang){
      dataFactory.getPostById(id,lang).then(function(data){
        if (data[0] != undefined) {
          $scope.post = data[0];
        }
        else {
          var newLang = lang == 'es' ? 'en' : 'es';
          $scope.flashMessage = "The requested post doesn't exist in requested language. Falling back to actual language.";
          $rootScope.destLang = newLang;
          $translate.use(newLang);
        }
     }).catch (function(e) {
         if (e.status == 404) {
           $state.go('not-found');
         }
     });
    }
    $scope.clearFlashMessage = function() {
      $scope.flashMessage = "";
    };
    getPostByid($stateParams.id, $stateParams.lang);

  });

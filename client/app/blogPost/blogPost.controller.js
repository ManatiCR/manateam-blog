'use strict';

angular.module('manatiBlogApp')
  .controller('BlogPostCtrl', function ($scope, $rootScope, $stateParams, $translate, $state, $location, dataFactory) {

    $scope.post = [];
    $scope.absoluteUrl = $location.absUrl();

    var getPostById = function (id, lang) {
      dataFactory.getPostById(id, lang).then(function(data) {

        if (data[0] !== undefined) {
          $scope.post = data[0];
        }
        else {
          var newLang = lang === 'es' ? 'en' : 'es';
          $scope.flashMessage = $translate.instant('POST-NOT-FOUND-LANG');
          $rootScope.destLang = newLang;
          $translate.use(newLang);
          getPostById(id, newLang);
        }
     }).catch (function(e) {
         if (e.status === 404) {
           $state.go('not-found');
         }
     });
    };

    $scope.clearFlashMessage = function() {
      $scope.flashMessage = '';
    };

    getPostById($stateParams.id, $stateParams.lang);
  });

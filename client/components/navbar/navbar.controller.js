'use strict';

angular.module('manatiBlogApp')
.controller('NavbarCtrl', function ($scope, $translate) {
  $scope.setLanguage = function(){
    if ($translate.use() === 'en'){
      $translate.use('es');
    }
    else if($translate.use() === 'es'){
      $translate.use('en');
    }
  };

});

'use strict';

angular.module('manatiBlogApp')
.controller('NavbarCtrl', function ($scope, $translate, $rootScope) {
  $scope.language = $translate.use();
  $scope.newLang = function() {
    return $scope.language == 'en' ? 'es' : 'en';
  }
  $rootScope.destLang = $scope.newLang();
  $scope.setLanguage = function(){
    if ($translate.use() === 'en'){
      $translate.use('es');
    }
    else if($translate.use() === 'es'){
      $translate.use('en');
    }
  };
  $scope.menu = [
    {
      'title': 'About us',
      'link': '/'
    },
    {
      'title': 'Our Work',
      'link': '/'
    },
    {
      'title': 'Community',
      'link': '/'
    },
    {
      'title': 'Blog',
      'link': '/'
    },
  ];

});

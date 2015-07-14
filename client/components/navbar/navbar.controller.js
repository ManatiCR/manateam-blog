'use strict';

angular.module('manatiBlogApp')
.controller('NavbarCtrl', function ($scope, $translate, $rootScope) {

  $scope.newLang = function() {
    return $scope.language == 'en' ? 'es' : 'en';
  }

  $scope.language = $translate.use();
  $rootScope.destLang = $scope.newLang();

  $scope.switchLanguage = function(){
    var lang = $translate.use() == 'en' ? 'es' : 'en';
    $translate.use(lang);
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

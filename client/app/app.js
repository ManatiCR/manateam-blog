'use strict';

angular.module('manatiBlogApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'pascalprecht.translate',
])
.constant('appConfig',{
  api: {
    url: 'http://manati.tk/api/'
  }
})
.config(function ($stateProvider, $urlRouterProvider, $locationProvider,$translateProvider) {
  $urlRouterProvider
  .otherwise('/');
  $locationProvider.html5Mode(false);
  $translateProvider.translations('en',{
    'MANATI-SLOGAN': 'We’re a bunch of Drupal geeks'
  });
  $translateProvider.translations('es',{
    'MANATI-SLOGAN': 'Somos un montón de Drupal geeks'
  });
  $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
  'en_US': 'en',
  'en_UK': 'en',
  'es_ES': 'es',
  'es_CL': 'es'
});
  $translateProvider.determinePreferredLanguage();
  $translateProvider.useCookieStorage();
});

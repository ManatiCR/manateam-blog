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
    'MANATI-SLOGAN': 'We’re a bunch of Drupal geeks',
    'READ-MORE-LINK': 'Read More'
  });
  $translateProvider.translations('es',{
    'MANATI-SLOGAN': 'Somos un montón de Drupal geeks',
    'READ-MORE-LINK': 'Leer más'
  });
  $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
  'en_US': 'en',
  'en_UK': 'en',
  'es_ES': 'es',
  'es_CL': 'es',
  'es_CR': 'es',

});
  $translateProvider.fallbackLanguage('en');
  $translateProvider.determinePreferredLanguage();
  $translateProvider.useCookieStorage();

});

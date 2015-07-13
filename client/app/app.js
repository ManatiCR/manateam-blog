'use strict';

angular.module('manatiBlogApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'pascalprecht.translate',
  'ngDisqus',
])
.constant('appConfig',{
  api: {
    url: 'http://manati.tk/api/'
  }
})
.config(function ($stateProvider, $urlRouterProvider, $locationProvider,$translateProvider) {
  $urlRouterProvider
  .otherwise('/');
  $locationProvider.html5Mode(true);
  $translateProvider.translations('en',{
    'MANATI-SLOGAN': 'We’re a bunch of Drupal geeks',
    'READ-MORE-LINK': 'Read More',
    'LANGUAGE': 'Español',
    'SHARE': 'Share',
  });
  $translateProvider.translations('es',{
    'MANATI-SLOGAN': 'Somos un montón de Drupal geeks',
    'READ-MORE-LINK': 'Leer más',
    'LANGUAGE':  'English',
    'SHARE': 'Comparte en',
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
  $translateProvider.useSanitizeValueStrategy('sanitize');

});

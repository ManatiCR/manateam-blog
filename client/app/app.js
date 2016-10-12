'use strict';

angular.module('manatiBlogApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'pascalprecht.translate',
  'ngDisqus',
  'ngAnimate',
])
.constant('appConfig',{
  api: {
    url: 'http://test-manatiblog.pantheonsite.io/api/'
  }
})
.config(function ($stateProvider, $urlRouterProvider, $locationProvider,$translateProvider) {
  $urlRouterProvider
  .otherwise('/not-found');
  $locationProvider.html5Mode(true);
  $translateProvider.translations('en',{
    'MANATI-SLOGAN': 'A bunch of Drupal geeks from Costa Rica',
    'MANATI-SLOGAN-SHORT': 'A bunch of Drupal geeks',
    'MANATI-DESCRIPTION': 'A full stack, Drupal design and development agency from Costa Rica',
    'FOOTER-BADGE': 'EMBRACE OPEN SOURCE',
    'CLOSING-INFORMATION': 'made in Costa Rica',
    'BLOG': 'Blog',
    'READ-MORE-LINK': 'Read More',
    'POST-NOT-FOUND-LANG': 'The requested post doesn\'t exist in requested language. Falling back to actual language.',
    'LANGUAGE': 'Español',
    'SHARE': 'Share',
  });
  $translateProvider.translations('es',{
    'MANATI-SLOGAN': 'Somos un montón de Drupal geeks de Costa Rica',
    'MANATI-SLOGAN-SHORT': 'Un montón de Drupal geeks',
    'MANATI-DESCRIPTION': 'Una agencia full stack de desarrollo y diseño especializados en Drupal de Costa Rica',
    'FOOTER-BADGE': 'ABRAZA EL OPEN SOURCE',
    'CLOSING-INFORMATION': 'hecho en Costa Rica',
    'BLOG': 'Blog',
    'READ-MORE-LINK': 'Leer más',
    'POST-NOT-FOUND-LANG': 'El post solicitado no existe en el idioma solicitado. Mostrando el post en el lenguage actual.',
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
  $translateProvider.useSanitizeValueStrategy('escape');

});

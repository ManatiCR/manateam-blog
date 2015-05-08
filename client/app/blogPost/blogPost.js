'use strict';

angular.module('manatiBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blogPost', {
        url: ':lang/post/:id',
        templateUrl: 'app/blogPost/blogPost.html',
        controller: 'BlogPostCtrl'
      });
  });

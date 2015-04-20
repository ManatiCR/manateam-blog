'use strict';

angular.module('manatiBlogApp')
  .factory('dataFactory', function ($resource, appConfig) {
    var posts = $resource(appConfig.api.url+'blog/:id',{
      id: '@id'
    }, {
      query: {
        method: 'GET',
        isArray: true,
      },
      get: {
        method: 'JSONP',
        isArray: true,
        headers: {
          'Accept': 'application/javascript'
        },
        params: {
          callback: 'JSON_CALLBACK'
        }
      },
    });
    function getPosts(){
      return posts.query().$promise;
    }
    return {
      getPosts: getPosts
    };
  });

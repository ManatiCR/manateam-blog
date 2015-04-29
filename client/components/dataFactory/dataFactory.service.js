'use strict';

angular.module('manatiBlogApp')
  .factory('dataFactory', function ($resource, appConfig) {
    var posts = $resource(appConfig.api.url+'blog/:id',{
      id: '@id',
      page: '@page',
    }, {
      query: {
        method: 'GET',
        isArray: true,
        params: {
          page: 0
        },
      },
      get: {
        method: 'GET',
        isArray: true,
        params: {
          id: 0
        }
      },
    });
    function getPosts(pageNumber){
      return posts.query({page: pageNumber}).$promise;
    }
    function getPostById(id){
      return posts.get({id: id}).$promise;
    }
    return {
      getPosts: getPosts,
      getPostById: getPostById
    };
  });

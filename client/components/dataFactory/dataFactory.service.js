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
        method: 'GET',
        isArray: true,
        params: {
          id: 0
        }
      },
    });
    function getPosts(){
      return posts.query().$promise;
    }
    function getPostById(id){
      return posts.get({id: id}).$promise;
    }
    return {
      getPosts: getPosts,
      getPostById: getPostById
    };
  });

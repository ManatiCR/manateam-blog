'use strict';

angular.module('manatiBlogApp')
  .factory('dataFactory', function ($resource, appConfig) {
    var posts = $resource(appConfig.api.url+'blog/:id',{
      id: '@id',
      lang: '@lang',
      //page: '@page',
    }, {
      query: {
        method: 'GET',
        isArray: true,
        params: {
          //page: 0,
          lang: 'en',
        },
      },
      get: {
        method: 'GET',
        isArray: true,
        params: {
          id: 0,
          lang: 'en',
        }
      },
    });

    function getPosts(language,pageNumber){
      return posts.query({page: pageNumber, lang:language}).$promise;
    }
    function getPostById(id, language){
      return posts.get({id: id, lang: language}).$promise;
    }

    return {
      getPosts: getPosts,
      getPostById: getPostById,
    };
  });

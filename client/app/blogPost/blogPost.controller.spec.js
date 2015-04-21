'use strict';

describe('Controller: BlogPostCtrl', function () {

  // load the controller's module
  beforeEach(module('manatiBlogApp'));

  var BlogPostCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogPostCtrl = $controller('BlogPostCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

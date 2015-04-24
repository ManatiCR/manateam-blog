'use strict';

describe('Controller: PostCommentsCtrl', function () {

  // load the controller's module
  beforeEach(module('manatiBlogApp'));

  var PostCommentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostCommentsCtrl = $controller('PostCommentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

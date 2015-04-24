'use strict';

describe('Controller: PostRelatedContentCtrl', function () {

  // load the controller's module
  beforeEach(module('manatiBlogApp'));

  var PostRelatedContentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostRelatedContentCtrl = $controller('PostRelatedContentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

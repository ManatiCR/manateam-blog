'use strict';

describe('Controller: NotFoundCtrl', function () {

  // load the controller's module
  beforeEach(module('manatiBlogApp'));

  var NotFoundCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotFoundCtrl = $controller('NotFoundCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

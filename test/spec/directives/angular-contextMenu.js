'use strict';

describe('Directive: angularContextMenu', function () {

  // load the directive's module
  beforeEach(module('angularContextMenuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<angular-context-menu></angular-context-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the angularContextMenu directive');
  }));
});

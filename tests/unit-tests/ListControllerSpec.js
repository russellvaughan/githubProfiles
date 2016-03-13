describe("ListController", function() {
  var ctrl, httpBackend, response, userListFactory;
  
  beforeEach(function() {
    module("myApp");
    
    inject(function($controller, $httpBackend, UserListFactory) {
      ctrl = $controller("ListController")      
      userListFactory = spyOn(UserListFactory, 'getList')
    });
  });
  
  it('Calls #getList on UserListFactory to GET request to github.api', function() {
    expect(userListFactory).toHaveBeenCalled;
  })
  
});
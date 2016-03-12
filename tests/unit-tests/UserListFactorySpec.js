describe('UserListFactory', function() {
  var factory, data, httpBackend;
  
  beforeEach(function() {
    module('myApp');
    
    inject(function($httpBackend, UserListFactory) {
      factory = UserListFactory;
      httpBackend = $httpBackend;
      response = { "data" : {"login" : "user1"}}
      httpBackend.when("GET", "https://api.github.com/orgs/makersacademy/members").respond(response);
    })
  })
  
  it('is an Object', function() {
    expect(factory).toBeNonEmptyObject();
   
  })
  
  it('has a method called #getList', function() {
    expect(factory.getList()).toBeDefined();
    expect(factory).toHaveMethod('getList')
  })
  
  it('sends a GET request to the github.api', function() {
    
  })
  
  
});
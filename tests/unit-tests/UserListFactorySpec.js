describe('UserListFactory', function() {
  var factory, httpBackend, eggs;
  
  beforeEach(function() {
    module('myApp');
    
    inject(function($httpBackend, UserListFactory) {
      factory = UserListFactory;
      httpBackend = $httpBackend;
      response = { "data" : [{"login" : "user1"}]}
      user = { "data" : "username"}
      httpBackend.when("GET", "https://api.github.com/orgs/makersacademy/members").respond(response.data);
      httpBackend.when("GET", "https://api.github.com/users/user1").respond(user);
      
    })
  })
  
  it('is an Object', function() {
    expect(factory).toBeNonEmptyObject();
   
  })
  
  it('has a method called #getList', function() {
    expect(factory.getList()).toBeDefined();
    expect(factory).toHaveMethod('getList');
  })
  
  it('sends a GET request to the github.api', function() {
       factory.getList();
       httpBackend.flush();
       expect(userArray[0].data).toEqual(user);   
  })
  
  
});
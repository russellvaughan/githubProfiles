describe("ListController", function() {
  var ctrl, httpBackend, response;
  
  beforeEach(function() {
    module("myApp");
    inject(function($controller, $httpBackend) {
      ctrl = $controller("ListController");
      httpBackend = $httpBackend;
      response = { "data" : "FromRequest"}
      httpBackend.when("GET", "https://api.github.com/orgs/makersacademy/members").respond(response);
    });
  });
  
  it('Returns data from a GET request to github.api', function() {
    httpBackend.flush();
    expect(ctrl.members.data).toEqual(response);
  })
  
});

myApp.controller('ListController', function(UserListFactory) {
  var self = this
  
  UserListFactory.getList().then(function(response) {
    self.userData = response;
  })    
 
})
myApp.factory('UserListFactory', function($http){
  var userList = {};
  
  userList.getList = function() {
    
    return $http.get('https://api.github.com/orgs/makersacademy/members').then(function(response) {
      this.members = response.data;
      return this.members;
    })
  }
  
  userList.followers = function() {
   
    return $http.get().then(function(response) {
      this.followersJson = response;
      console.log(this.followersJson);
      return this.followersJson;
    })
  }

  return userList;
});

myApp.controller('ListController', function(UserListFactory) {
  var self = this
  
  UserListFactory.getList().then(function(response) {
    self.userData = response;
  })
  
  UserListFactory.followers().then(function(response) {
    self.followersData = response;
    return self.followersData;
  })
  
   self.getLink = function(link) {
     this.link = link;
   }
  
   // UserListFactory.followers().then(function(response) {
   //   self.followers = response;
   //   console.log(self.followers);
   // }) 
   
   
    
 
})
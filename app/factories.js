myApp.factory('UserListFactory', function($http){
  var userList = {};
  
  userList.getList = function() {
     
    return $http.get('https://api.github.com/orgs/makersacademy/members').then(function(response) {
       this.members = response.data;
       this.users = []
       this.userArray = []
        for (var i = 0; i < this.members.length; i++) {
          this.users.push(this.members[i].login);
        }
        for (var i = 0; i < this.users.length; i++) {
          $http.get('https://api.github.com/users/' + this.users[i]).then(function(response) {
            this.userArray.push(response);
          })  
        }
         return this.userArray;
        })  
     }
  
  return userList;
});

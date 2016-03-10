
myApp.controller('ListController', function($http) {
  var self = this
  $http({
    method: 'GET',
    url: 'https://api.github.com/orgs/makersacademy/members'
  }).then(function successCallback(response) {
    self.members = response
    
  }, function errorCallback(response) {
    console.log('Error =' + response )
 });


})
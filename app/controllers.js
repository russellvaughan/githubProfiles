
myApp.controller('ghUsersCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: 'https://api.github.com/orgs/makersacademy/members'
  }).then(function successCallback(response) {
    
  })
})
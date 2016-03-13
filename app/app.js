'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/index.html'});
}]);


var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);

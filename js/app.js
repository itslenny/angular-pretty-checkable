'use strict';

var myApp = angular.module('myapp', ['pretty-checkable'])

.config(['prettyCheckableConfig',function(prettyCheckableConfig){
  //prettyCheckableConfig.toggleEvent='mousemove';
}]);

myApp.controller('checkdemo', ['$scope',function($scope){
  $scope.myModel={
    one:false,two:true,three:false,four:false,five:true,
    yahoo:false,wahoo:false,tahoo:'tahoo',
    radio:'one',
    radios:2
  };
  $scope.radios=['option one','option two','option three','option four','option five']
}]);

/*
.config(['$routeProvider','$locationProvider','$httpProvider', function($routeProvider,$locationProvider,$httpProvider) {
  $locationProvider.hashPrefix('!');//.html5Mode(true)
  //load routes from stored routes object
  for(var path in Kitovet.routes){
    $routeProvider.when(path, Kitovet.routes[path]);
  };
  $routeProvider.otherwise({redirectTo: '/'});
  $httpProvider.interceptors.push('myHttpInterceptor');
}])

.run(["$rootScope", "$location","UserService","$dialogs",function($rootScope,$location,UserService,$dialogs){
*/
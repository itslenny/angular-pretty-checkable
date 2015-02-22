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
    radios:2,
    html1:true,
    html2:1
  };
  $scope.radios=['option one','option two','option three','option four','option five']
  $scope.disableChecks=false;
}]);

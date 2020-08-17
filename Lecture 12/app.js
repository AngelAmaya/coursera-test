(function(){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);
MsgController.$inject = ['$scope','$filter'];
function MsgController($scope,$filter) {
  $scope.name = "Angel";
  $scope.stateOfBeing = "Goku";
  $scope.cookieCost = .45;

  $scope.sayMessage = function(){
    var msg ="Angel likes to eat healthy snaxks at night!";
    var out = $filter('uppercase')(msg);
    return out;
  }
  $scope.feedAngel = function(){
    $scope.stateOfBeing = "Reloj"
  }
}
})();

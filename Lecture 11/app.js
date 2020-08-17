(function(){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);
MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Angel";
  $scope.stateOfBeing = "Goku";

  $scope.sayMessage = function(){
    return "Angel likes to eat healthy snaxks at night!";
  }
  $scope.feedAngel = function(){
    $scope.stateOfBeing = "Reloj"
  }
}
})();

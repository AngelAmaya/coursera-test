(function(){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope','lovesFilter'];
function MsgController($scope, lovesFilter) {
  $scope.name = "Angel";
  $scope.stateOfBeing = "Goku";

  $scope.sayMessage = function(){
    return "Angel likes to eat healthy snaxks at night!";
  }

  $scope.sayLovesMessage = function(){
    var msg =  "Angel likes to eat healthy snaxks at night!";
    msg = lovesFilter(msg);
    return msg;
  }

  $scope.feedAngel = function(){
    $scope.stateOfBeing = "Reloj"
  }
}

function LovesFilter() {
  return function(input){
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  }
}

function TruthFilter() {
  return function(input, target, replace){
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }
}
})();

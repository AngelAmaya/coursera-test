(function(){
'use strict';

angular.module('LunchCheckApp',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunch_menu = "";
  $scope.message = "";
  $scope.type = "";

  $scope.checkIfTooMuch = function(){
    var cant = $scope.lunch_menu.split(',').length;
    if(cant >= 1 && cant <= 3){
      $scope.message = "Enjoy";
      $scope.type = "success";
    }
    if(cant > 3) {
      $scope.message = "Too much!";
      $scope.type = "success";
    }
    if($scope.lunch_menu == ""){
      $scope.message = "Please enter data first";
      $scope.type = "danger";
    }
  }
}
})();

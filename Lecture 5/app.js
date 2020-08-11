(function(){
  'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController',function ($scope){
  $scope.name = "Angel";
  $scope.sayHello = function() {
    return "Hello Coursera!";
  };
});

})();

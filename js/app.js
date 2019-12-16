var app = angular.module('expensesApp', []);

app.controller('ExpensesViewController', ['$scope', function($scope){
  $scope.name = 'Pablo';

  $scope.expense = {
    description: 'food',
    amount: 10
  };

  $scope.phrase = 'the sky is blue';

  $scope.increaseAmount = function(){
    $scope.expense.amount++;
  }
}]);

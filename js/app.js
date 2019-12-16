var app = angular.module('expensesApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/expenses.html',
      controller: 'ExpensesViewController'
    })
    .when('/expenses', {
      templateUrl: 'views/expenses.html',
      controller: 'ExpensesViewController'
    })
    .when('/expenses/new', {
      templateUrl: 'views/expenseForm.html',
      controller: 'ExpensesViewController'
    })
    .when('/expenses/edit/:id', {
      templateUrl: 'views/expenseForm.html',
      controller: 'ExpensesViewController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

app.controller('HomeViewController', ['$scope', function($scope){
  $scope.appTitle = 'Simple Expenses Tracker';

}]);

app.factory('Expenses', function(){
  var service = {};
  service.entries = [
    {description: 'food', amount: 10, date: '2019-10-01'},
    {description: 'tickets', amount: 11, date: '2019-10-02'},
    {description: 'food', amount: 12, date: '2019-10-03'},
    {description: 'phone credit', amount: 13, date: '2019-10-04'},
    {description: 'bills', amount: 14, date: '2019-10-05'},
    {description: 'food', amount: 15, date: '2019-10-06'},
  ];
  return service;
});

app.controller('ExpensesViewController', ['$scope', 'Expenses', function($scope, Expenses){
  $scope.expenses = Expenses.entries;
}]);

// app.controller('ExpenseViewController', ['$scope', '$routeParams',
//  function($scope, $routeParams){
//   $scope.someText = 'The world is round. ID=' + $routeParams.id;
// }]);

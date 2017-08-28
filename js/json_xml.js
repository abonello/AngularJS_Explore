var app = angular.module("app", []);
app.controller("data", ["$scope", function($scope) {
    $scope.key = "aKey";
    $scope.value = "aValue";
}])
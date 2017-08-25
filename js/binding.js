var app = angular.module("app", []);
app.controller("oneWay", ["$scope", function($scope) {
    $scope.a = 10;
    $scope.b = 20;
}])
app.controller("oneTime", ["$scope", function($scope) {
    $scope.c = 10;
    $scope.d = 20;

    $scope.doubleValues = function() {
        $scope.c = $scope.c * 2;
        $scope.d = $scope.d * 2;
    };

    $scope.sumValues = function() {
        $scope.sum = $scope.c + $scope.d;
    };
}])
app.controller("twoWay", ["$scope", function($scope) {
    $scope.e = 10;
    $scope.f = 15;

    $scope.addNumbers = function() {
        $scope.sum = parseInt($scope.e) + parseInt($scope.f); //The parsing is required as we will be getting input from user as a string.
    };
}])
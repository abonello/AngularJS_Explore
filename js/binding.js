var app = angular.module("app", []);
app.controller("oneWay", ["$scope", function($scope) {
    $scope.a = 10;
    $scope.b = 20;
}]);
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
}]);
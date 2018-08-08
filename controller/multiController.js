var app = angular.module('myApp', []);
app.controller('myCtrl1', function($scope) {
    $scope.firstName = "Johns";
    $scope.lastName = "Doef";
});

app.controller('myCtrl2', function($scope) {
    $scope.firstName = "Tom";
    $scope.lastName = "kkk";
});
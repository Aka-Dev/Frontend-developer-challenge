'use strict';

var app = angular.module('myApp', []);

app.controller('videoController', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'data.json'
    }).then(function successCallback(response) {
        $scope.videos = response.data;
    }, function errorCallback(response) {
        console.log(response);
    });
}]);
'use strict';

var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('videoController', ['$scope', '$http', function ($scope, $http) {

    $http({
        method: 'GET',
        url: 'data.json'
    }).then(function successCallback(response) {
        $scope.videos = response.data;
    }, function errorCallback(response) {
        console.log(response);
    });


    $scope.classForm = 'col-lg-3 filter';
    $scope.classListItems = 'col-lg-9 list-items';
    $scope.numberResults = 10;
    $scope.hideForm = function (newPageNumber) {
        if (newPageNumber > 1) {
            $scope.classForm = 'hide';
            $scope.classListItems = 'col-lg-12 list-items';
            $scope.numberResults = 10;
        } else {
            $scope.classForm = 'col-lg-3 filter';
            $scope.classListItems = 'col-lg-9 list-items';
        }
    };

}]);
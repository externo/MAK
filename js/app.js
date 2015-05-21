'use strict';

var app = angular.module('App', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'introCtrl',
            templateUrl: 'templates/intro.html'})
        .otherwise({
            redirectTo : '/'});
});
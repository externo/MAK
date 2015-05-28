'use strict';

var app = angular.module('App', ['ngRoute']).run(['$route', function($route)  {
    $route.reload();
}]);
app.config(function ($routeProvider) {
    $routeProvider
        //.when('/', {
        //    controller: 'introCtrl',
        //    templateUrl: 'templates/intro.html'})
        .when('/children', {
            controller: 'childrenCtrl',
            templateUrl: 'templates/home.html'})
        .when('/women', {
            controller: 'womenCtrl',
            templateUrl: 'templates/women.html'})
        .when('/men', {
            controller: 'menCtrl',
            templateUrl: 'templates/men.html'})
        .when('/love', {
            controller: 'loveCtrl',
            templateUrl: 'templates/home.html'})
        .when('/forme', {
            controller: '',
            templateUrl: 'templates/forme.html'})
        .when('/prices', {
            controller: '',
            templateUrl: 'templates/prices.html'})
        .otherwise({
            redirectTo : '/prices'});
});
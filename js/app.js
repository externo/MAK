'use strict';

var app = angular.module('App', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'introCtrl',
            templateUrl: 'templates/intro.html'})
        .when('/children', {
            controller: 'childrenCtrl',
            templateUrl: 'templates/home.html'})
        .when('/women', {
            controller: 'womenCtrl',
            templateUrl: 'templates/home.html'})
        .when('/men', {
            controller: 'menCtrl',
            templateUrl: 'templates/home.html'})
        .when('/love', {
            controller: 'loveCtrl',
            templateUrl: 'templates/home.html'})
        .when('/forme', {
            controller: '',
            templateUrl: 'templates/forme.html'})
        .otherwise({
            redirectTo : '/forme'});
});
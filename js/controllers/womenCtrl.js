'use strict';

app.controller('womenCtrl', function ($scope) {
        $("#menu").show();
        // Set of Photos
        $scope.photos = [
            {src: 'images/women/1.jpg'},
            {src: 'images/women/2.jpg'},
            {src: 'images/women/3.jpg'},
            {src: 'images/women/4.jpg'},
            {src: 'images/women/5.jpg'},
            {src: 'images/women/6.jpg'},
            {src: 'images/women/7.jpg'},
            {src: 'images/women/8.jpg'},
            {src: 'images/women/9.jpg'},
            {src: 'images/women/10.jpg'},
            {src: 'images/women/11.jpg'},
            {src: 'images/women/12.jpg'},
            {src: 'images/women/13.jpg'}
        ];

        // initial image index
        $scope._Index = 0;

        // if a current image is the same as requested image
        $scope.isActive = function (index) {
            return $scope._Index === index;
        };

        // show a certain image
        $scope.showPhoto = function (index) {
            $scope._Index = index;
        };
    });
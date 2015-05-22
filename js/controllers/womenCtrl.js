'use strict';

app.controller('womenCtrl', function ($scope) {
        $("#menu").show();
        // Set of Photos
        $scope.photos = [
            {src: 'images/background/1.jpg'},
            {src: 'images/background/2.jpg'},
            {src: 'images/background/3.jpg'},
            {src: 'images/background/4.jpg'},
            {src: 'images/background/5.jpg'},
            {src: 'images/background/6.jpg'},
            {src: 'images/background/7.jpg'},
            {src: 'images/background/8.jpg'},
            {src: 'images/background/9.jpg'},
            {src: 'images/background/10.jpg'},
            {src: 'images/background/11.jpg'},
            {src: 'images/background/12.jpg'},
            {src: 'images/background/13.jpg'}
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
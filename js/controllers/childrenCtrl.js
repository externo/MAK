'use strict';

app.controller('childrenCtrl', function ($scope) {
        $("#menu").show();
        // Set of Photos
        $scope.photos = [
            {src: 'images/children/1.jpg'},
            {src: 'images/children/2.jpg'},
            {src: 'images/children/3.jpg'},
            {src: 'images/children/4.jpg'},
            {src: 'images/children/5.jpg'},
            {src: 'images/children/6.jpg'},
            {src: 'images/children/7.jpg'},
            {src: 'images/children/8.jpg'},
            {src: 'images/children/9.jpg'},
            {src: 'images/children/10.jpg'},
            {src: 'images/children/11.jpg'}
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
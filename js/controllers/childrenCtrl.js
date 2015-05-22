'use strict';

app.controller('childrenCtrl', function ($scope) {
        $("#menu").show();
        // Set of Photos
        $scope.photos = [
            {src: 'images/background/3.jpg', desc: 'Image 01'},
            {src: 'images/background/3.jpg', desc: 'Image 01'},
            {src: 'images/background/3.jpg', desc: 'Image 01'},
            {src: 'images/background/3.jpg', desc: 'Image 01'},
            {src: 'images/background/3.jpg', desc: 'Image 01'},
            {src: 'images/background/3.jpg', desc: 'Image 01'},
            {src: 'images/background/3.jpg', desc: 'Image 01'},
            {src: 'images/background/3.jpg', desc: 'Image 01'}
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
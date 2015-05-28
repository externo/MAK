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
});
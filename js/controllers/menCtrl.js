'use strict';

app.controller('menCtrl', function ($scope) {
    $("#menu").show();
    // Set of Photos
    $scope.photos = [
        {src: 'images/men/1.jpg'},
        {src: 'images/men/2.jpg'},
        {src: 'images/men/3.jpg'},
        {src: 'images/men/4.jpg'},
        {src: 'images/men/5.jpg'},
        {src: 'images/men/6.jpg'},
        {src: 'images/men/7.jpg'},
        {src: 'images/men/8.jpg'},
        {src: 'images/men/9.jpg'},
        {src: 'images/men/10.jpg'},
        {src: 'images/men/11.jpg'}
    ];
});

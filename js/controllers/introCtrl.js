app.controller('introCtrl', ['$scope', function ($scope) {
    $(".variation")
        .hover(function(){
            $(this).width("31%");
            $(this).siblings().width("22%")
        })
        .mouseout(function(){
            $(this).width("25%");
            $(this).siblings().width("24%");
        });
}]);
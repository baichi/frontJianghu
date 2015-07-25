angular.module('frontModule').controller('RegCtrl',function($scope,$http,socket){
    $scope.user = {};
    $scope.save = function(){
        $http({
            url:'/users/reg',
            method:'POST',
            data:$scope.user
        }).success(function(user){

        }).error(function(){

        });
    }
});
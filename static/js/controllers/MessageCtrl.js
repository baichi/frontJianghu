angular.module('frontModule').controller('MessageCtrl',function($rootScope,$scope,socket){
    $scope.createMessage = function(){
        socket.emit('message',$scope.newMessage);
        $scope.newMessage = '';
    }
});
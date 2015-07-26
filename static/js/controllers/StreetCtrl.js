angular.module('frontModule').controller('StreetCtrl',function($scope,socket){
    $scope.messages = [];
    //console.log('before',$scope);
    socket.on('allMessages',function(messages){
        $scope.messages = messages;
    });
    //socket.emit('getAllMessages');
    socket.on('message',function(message){
        console.log($scope);
        $scope.messages.push(message);
    });
});
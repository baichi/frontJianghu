angular.module('frontModule').controller('StreetCtrl',function($scope,socket){
    $scope.messages = [];
    socket.on('allMessages',function(messages){
        $scope.messages.length = 0;
        messages.forEach(function(message){
            $scope.messages.push(message);
        });
    });
    socket.emit('getAllMessages');
    socket.on('message',function(message){
        console.log('message',message);
        $scope.messages.push(message);
    });
});
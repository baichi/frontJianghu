angular.module('frontModule').factory('socket', function ($rootScope) {
    var socket = io();
    //只监听一次
    socket.on('allMessages', function (messages) {
        $rootScope.$broadcast('allMessages', messages);
    });
    socket.on('message', function (message) {
        $rootScope.$broadcast('message', message);
    });
    return {
        getAllMessages: function () {
            socket.emit('getAllMessages');
        },
        addNew: function (message) {
            socket.emit('message', message);
        }
    };
});
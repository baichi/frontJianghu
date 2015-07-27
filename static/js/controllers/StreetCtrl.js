angular.module('frontModule').controller('StreetCtrl', function ($rootScope, $scope, socket) {
    $scope.messages = [];
    var allFn = $scope.$on('allMessages', function (event, messages) {
        $scope.$apply(function () {
            $scope.messages = messages;
        });
    });
    var msgFn = $scope.$on('message', function (event, message) {
        $scope.$apply(function () {
            $scope.messages.push(message);
        });
    });
    socket.getAllMessages();
    $scope.newMessage = "";
    $scope.createMessage = function () {
        socket.addNew({
            creator: $rootScope.currentUser,
            content: $scope.newMessage
        });
        $scope.newMessage = '';
    };

    $scope.$on('$destroy', function () {
        allFn();
        msgFn();
    });
});
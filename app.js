var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();//生成express中间件
//设置静态文件目录
app.use(express.static(path.join(__dirname,'static')));
//设置基础路由
app.use(function(req,res){
    console.log(req.url);
    res.sendFile(path.join(__dirname,'static','index.html'));
});
var server = app.listen(8080);
var io = require('socket.io').listen(server);
io.on('connection',function(socket){
    socket.emit('message','hello client');
    socket.on('message',function(message){
        console.log(message);
    });
});

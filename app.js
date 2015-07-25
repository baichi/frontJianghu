var express = require('express');
var path = require('path');
var fs = require('fs');
var routes = require('./routes/index');
var users = require('./routes/users');
var bodyParser = require('body-parser');

var app = express();//生成express中间件
//设置静态文件目录
app.use(express.static(path.join(__dirname,'static')));
//解析 请求体的数据，把请求体转成对象放在req.body上
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',routes);
app.use('/users',users);

var server = app.listen(8080);
var io = require('socket.io').listen(server);
var messages = [];
io.on('connection',function(socket){
    socket.on('message',function(message){
        messages.push(message);
        io.emit('message',message);
    });
    socket.on('getAllMessages',function(){
        socket.emit('allMessages',messages);
    });
});

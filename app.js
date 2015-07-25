var express = require('express');
var path = require('path');
var app = express();//生成express中间件
//设置静态文件目录
app.use(express.static(path.join(__dirname,'static')));
//设置基础路由
app.use(function(req,res){
    res.sendFile(path.join(__dirname,'static','index.html'));
});
var server = app.listen(8080);
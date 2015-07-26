var db = require('../models');

exports.save = function(user,callback){
    new db.User(user).save(function(err,user){
        if(err)
            callback(err);
        else
        callback(null,user);
    });
}
//登陆
exports.login = function(user,callback){
    db.User.findOne({username:user.username,
        password:user.password},function(err,result){
        if(err)
            callback(err);
        else{
            callback(null,callback);
        }
    });
}
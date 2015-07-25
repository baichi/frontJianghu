var db = require('../models');

exports.save = function(user,callback){
    new db.User(user).save(function(err,user){
        if(err)
            callback(err);
        else
        callback(null,user);
    });
}
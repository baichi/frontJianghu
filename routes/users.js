var express = require('express');
var router = express.Router();
var userService = require('../services/user');
router.get('/check',function(req,res){
  var userId = req.session.userId;
    console.log('check req.session.userId',userId);
  if(userId){
      userService.findById(userId,function(err,user){
          if(err)
              res.json(500,{msg:err});
          else{
              res.json(user);
          }
      });
  }
});
router.post('/reg',function(req,res){
  var user = req.body;
  userService.save(user,function(err,user){
      if(err)
        res.json(500,{msg:err});
      else{
          req.session.userId = user._id;
          res.json(user);
      }
  });
});

router.post('/login',function(req,res){
    var user = req.body;
    userService.login(user,function(err,user){
        if(err)
            res.json(500,{msg:err});
        else{
            req.session.userId = user._id;
            console.log('login',req.session.userId,user._id)
            res.json(user);
        }
    });
});
module.exports = router;
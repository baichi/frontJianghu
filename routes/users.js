var express = require('express');
var router = express.Router();
var userService = require('../services/user');
router.post('/reg',function(req,res){
  var user = req.body;
  userService.save(user,function(err,user){
      if(err)
        res.json(500,{msg:err});
      else{
          res.json(user);
      }
  });
});

router.post('/login',function(req,res){
    var user = req.body;
    console.log('body',req.body);
    userService.login(user,function(err,user){
        if(err)
            res.json(500,{msg:err});
        else{
            res.json(user);
        }
    });
});
module.exports = router;
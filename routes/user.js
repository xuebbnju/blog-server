var express = require('express');
var router = express.Router();
var Models = require('../Models');
createToken = require('../middleware/createToken');
checkToken = require('../middleware/checkToken');
/* GET users listing. */
router.post('/register', function(req, res, next) {
    var user = req.body;
    Models.User.findUserByName(user.username, function(err, users){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }
        if(users.length == 0){
             var _user = new Models.User(user);
             _user.save(function(err){
                 if(err){
                     console.log(err);
                 }else{
                    console.log('成功');
                    return res.json({
                        code: 200,
                        msg: '注册成功',
                        token: createToken(user.username),
                        user: user
                    });
                 }
             });
        }else{
           return res.json({
               code: 201,
               msg: '用户名已存在'
           });
        }
    });
});
router.post('/login', function(req, res, next) {
    var user = req.body;
    console.log(user)
    Models.User.findUserByName(user.username, function(err, users){
        if(err){
            console.log(err);
            return res.json({
                code: 500,
                msg: err
            });
        }
        if(users.length == 0){
            return res.json({
                code: 201,
                msg: '用户不存在'
            });
        }else{
           if(user.password == users[0].password){
                return res.json({
                    code: 200,
                    msg: '登陆成功',
                    token: createToken(user.username),
                    user: user
                });
           }else{
            return res.json({
                code: 500,
                msg: '密码错误',
            });
           }
        }
    });
});

module.exports = router;

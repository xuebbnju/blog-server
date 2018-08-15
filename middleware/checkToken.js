var jwt = require('jsonwebtoken');
module.exports = function(req, res, next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    var decoded = jwt.decode(token, "1014");
    if(token&&decoded.exp<=Date.now()/1000){
        return res.send({
            code: 401,
            msg: "授权已经过期，请重新登陆"
        });
    }else{
        next()
    }
}
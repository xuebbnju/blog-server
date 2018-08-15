var jwt = require('jsonwebtoken');
module.exports = function (username){

    var expiry = new Date();
    expiry.setDate(expiry.getDate()+7);
    const token = jwt.sign({
         username: username,
         exp: parseInt(expiry.getTime()/1000)
    }, "1014");
    return token;
}
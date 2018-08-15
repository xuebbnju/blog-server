var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String
});
userSchema.pre("save",function(next){
    if(this.isNew){
        this.createAt=Date.now();
    }
    next();
});
userSchema.statics = {
    findAllUser: function(){
        return this.find()
                   .sort({_id:-1})
                   .exec();
    },
    findUserByName: function(name, cb){
        return this.find({"username": name})
                .exec(cb);
    }

}
module.exports = userSchema;
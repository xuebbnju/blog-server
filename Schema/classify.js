var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var clssifySchema = new Schema({
    clssify: String,
    Author: String
});

clssifySchema.static = {
    findAllClass: function(){
        return this.find()
                   .sort({_id:-1})
                   .exec();
    },
    findClassByAuthor: function(author){
        return this.find({author})
                   .sort({_id:-1})
                   .exec();
    },
    removeClass: function(classId, cb){
        return this.remove({_id: classId})
                .exec(cb);
    },
    updateClass: function(classId, data){
        return this.update({_id: classId}, {$set: data}).exec();
    }

}
module.exports = clssifySchema;
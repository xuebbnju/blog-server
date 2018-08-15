var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    content: String,
    abstract: String,
    author: String,
    date: {
        type: Date,
        default: Date.now()
    }

});

blogSchema.statics = {
    findAllBlogs: function(){
        return this.find()
                   .sort({_id:-1})
                   .exec();
    },
    findBlogByClassify: function(classify, cb){
        return this.find({classify})
                .sort({_id:-1})
                .exec(cb);
    },
    findUserBlogByClassify: function(classify, author, cb){
        return this.find({classify,author})
                .sort({_id:-1})
                .exec(cb);
    },
    findBlogByAuthor: function(author, cb){
        return this.find({author})
                .sort({_id:-1})
                .exec(cb);
    },
    findBlogByPostId: function(postId, cb){
        return this.find({_id: postId})
                .sort({_id:-1})
                .exec(cb);
    },
    removeOneBlog: function(postId, cb){
        return this.remove({_id: postId})
                   .exec(cb);
    },
    updateOneBlog: function(postId, data, cb){
        return this.update({_id: postId}, {$set:data}).exec(cb);
    }


}
module.exports = blogSchema;
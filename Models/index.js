var mongoose = require("mongoose");
var blogSchema = require("../Schema/blog.js");
var classifySchema = require("../Schema/classify");
var userSchema = require("../Schema/user.js");

const Models = {
    User: mongoose.model('user', userSchema),
    Blog: mongoose.model('blog', blogSchema),
    classify: mongoose.model('classify', classifySchema)
}

module.exports = Models;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true}
}, {
  timestamp: true
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

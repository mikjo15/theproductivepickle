const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  title: {type: String, required: true},
  shortDesc: {type: String, required: true},
  description: {type: Object, required: true}
}, {
  timestamp: true,
  minimize: false
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

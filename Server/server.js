const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
const mongoose = require("mongoose");
let Post = require("./models/post.model.js");
require("dotenv").config();

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;
const url = process.env.ATLAS_URI;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/public')));

const mailchimp = new Mailchimp(mc_api_key);

// Connect to mongoose
(async () => {
  try {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (err) {
    console.log('error: ' + err)
  }
})()

// Add subscriber to maillist
app.get("/api/memberAdd", (req, res) => {
  mailchimp
  .post(`/lists/${list_id}/members/`, {
    email_address: req.query.email,
    status: "subscribed",
    merge_fields: {
        FNAME: req.query.name
    }
  })
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    res.send(err);
  })
})

// Get all the posts from mongodb atlas and send them back to frontend
app.get('/posts', async (req, res) => {
  const posts = await Post.find({});

  try {
    res.send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add post to mongodb
app.post("/addPost", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const newPost = new Post({title, content});

  newPost.save()
    .then(() => res.json("Post Published"))
    .catch(err => res.status(400).json("Error: " + err));
});

app.listen(port, () => {
  console.log('Server is running on port: 5000');
})

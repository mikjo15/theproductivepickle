const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
const mongoose = require("mongoose");
let Post = require("./models/post.model.js");
const _ = require("lodash");
require("dotenv").config();
const multer = require('multer');

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;
const url = process.env.ATLAS_URI;
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, '/../client/public')));
app.use('/static', express.static(__dirname + '/uploads'))

// Store image file for blog FIGURE OUT FILE PATHS
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().split(':')[0] + file.originalname)
  }
})
const upload = multer({
  storage: storage
})
app.post('/uploadImage', upload.single('file'), (req, res) => {
  console.log("starting upload...", req.file)
  res.json('http://localhost:3000/static/' + req.file.filename)
});

// Connect to mailchimp
const mailchimp = new Mailchimp(mc_api_key);

// Connect to mongoose
(async () => {
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (err) {
    console.log('error: ' + err)
  }
})()

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
app.get("/posts", async (req, res) => {
  const posts = await Post.find({});

  try {
    res.send(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// TODO: Send post object to client
app.get(`/posts/:title`, (req, res) => {
  const title = req.params.title;

  Post.findOne({ title: title })
    .then(post => res.json(post))
    .catch(err => res.json("Error: ", err))
})

// Add post to mongodb
app.post("/addPost", (req, res) => {
  console.log(req.body)
  const newPost = new Post({
    title: req.body.title,
    shortDesc: req.body.shortDesc,
    description: req.body.description
  })
  newPost.save()
    .then(post => res.json(post))
    .catch(err => res.status(500).json({
      "Error": err
    }))
})

app.listen(port, () => {
  console.log('Server is running on port: 5000');
})

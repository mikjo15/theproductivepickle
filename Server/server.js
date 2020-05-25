const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/public')));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public', 'index.html'));
})

app.post("/", (req, res) => {
  res.send("Hey there!")
})

app.listen(port, () => {
  console.log('Server is running on port: 5000');
})

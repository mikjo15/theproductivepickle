const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
require("dotenv").config();

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/public')));

const mailchimp = new Mailchimp(mc_api_key);

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

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public', 'index.html'));
})

app.listen(port, () => {
  console.log('Server is running on port: 5000');
})

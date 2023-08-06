const express = require('express');
const mongoose = require('mongoose');
const Follower = require('./models/follower.js');
const User = require('../../../models/user');

const app = express();
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

app.use(express.json());

app.get('/follow:id', async (req, res) => {
  // This is a get request which will serve the user all of the particular followers
  const username = req.params.id;
  try {
    const nowProfile = await Follower.find({ username: username });
    res.status(201).json({ nowProfile });
    // In the frontend changes need to be made and only followeruserName needs to be extracted as the need be.
  }
  catch (err) {
    res.status(500).send("Error in finding the followers")
  }
});

app.post('/follow', async (req, res) => {
  // This logic is to follow some user.
  const { username, followerUserName } = req.body;
  try {
    const nowProfile = await User.find({ username: followerUserName });
    await nowProfile.updateOne({ followers: nowProfile.followers + 1 });
    // increasing by one
    // now we'll create a new document
    await Follower.create({ username: username, followerUserName: followerUserName });
    // we'll append a new document in the follower schema
    res.status(201).json("Updated successfully");
    // The userprofile is updated with the new username
  }
  catch (err) {
    res.status(500).send("Error in following profile");
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

app.use(express.json());

app.get('/profile:id', async (req, res) => {
    // This is a get request which will serve the user the username ,followers. Email probably wouldn't be necessary
    const username = req.params.id;
    try {
        const nowProfile = await User.find({ username: username });
        res.status(201).json({
            username: username,
            followers: nowProfile.followers,
        })
    }
    catch (err) {
        res.status(500).send("Error in finding the profile")
    }
});

app.post('/profile', async (req, res) => {
    // This logic is to update the profile. We'll only change username as of now. Password updation could be critical as it
    // would require extra authentication
    const { username, newUserName } = req.body;
    try {
        const nowProfile = await User.find({ username: username });
        nowProfile.updateOne({ username: newUserName });
        res.status(201).json("Updated successfully");
        // The userprofile is updated with the new username
    }
    catch (err) {
        res.status(500).send("Error in updating the profile");
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
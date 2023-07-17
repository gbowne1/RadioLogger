const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    followerusername: {
        type: String,
        required: true,
        unique: true,
    },

});
// This model is to maintain the list of the followers of a particular user. This can be helpful if you have list 
// all the followers.

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;

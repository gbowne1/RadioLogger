const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    followerusername: {
        type: String,
        required: true
    },

});

followerSchema.index({ username: 1, followerusername: 1 }, { unique: true });

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;

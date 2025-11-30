const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
    userId: { // The person being followed
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    followerId: { // The person doing the following
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
});

followerSchema.index({ userId: 1, followerId: 1 }, { unique: true });

module.exports = followerSchema;

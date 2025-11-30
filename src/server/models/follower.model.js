const mongoose = require('mongoose');
const followerSchema = require('../schemas/follower.schema');

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;

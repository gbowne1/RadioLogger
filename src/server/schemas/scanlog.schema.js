const mongoose = require('mongoose');

const scanLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' 
    },
    frequency: {
        type: Number,
        required: true
    },
    callSign: {
        type: String,
        required: true
    },
    tone: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },
    toneType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    systemType: {
        type: String,
        required: true
    },
    systemId: {
        type: String,
        required: true
    },
    talkgroups: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    systemFrequencies: {
        type: String,
        required: true
    },
    repeaters: {
        type: String,
        required: true
    }
});

module.exports = scanLogSchema;

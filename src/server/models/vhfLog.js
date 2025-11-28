const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const vhfLogSchema = new mongoose.Schema({
  callsign: { type: String, required: true },
  frequency: { type: Number, required: true },
  mode: { type: String, required: true }
});

// Define the log model
const vhfLog = mongoose.model('Log', vhfLogSchema)
module.exports = vhfLog;

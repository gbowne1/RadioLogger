const mongoose = require('mongoose');

const qslCardSchema = new mongoose.Schema({
  callsign: {
    type: String,
    required: true
  },
  dateSent: {
    type: Date,
    required: true
  },
  dateReceived: {
    type: Date,
    required: true
  },
  frequency: {
    type: Number,
    required: true
  },
  mode: {
    type: String,
    required: true
  },
  qslSent: {
    type: Boolean,
    default: false
  },
  qslReceived: {
    type: Boolean,
    default: false
  },
  notes: {
    type: String
  }
});

const QslCard = mongoose.model('QslCard', qslCardSchema);

module.exports = QslCard;

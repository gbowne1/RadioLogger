const mongoose = require('mongoose');
const MONGO_URL = require('../config/db');
const logger = require('./logger');

exports.connection = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
  } catch(err) {
    logger.error(err);
    throw new Error('Error to connect database');
  }
}


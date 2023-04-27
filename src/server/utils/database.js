const mongoose = require('mongoose');
const MONGO_URL = require('../config/db');
const logger = require('./logger');

class Database {
  constructor() {
    this.mongoUrl = MONGO_URL;
  }

  async connect() {
    try {
      await mongoose.connect(this.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    } catch(err) {
      logger.error(err);
      throw new Error('Error to connect database');
    }
  }
}

module.exports = new Database();


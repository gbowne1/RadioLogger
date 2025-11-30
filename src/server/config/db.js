const {
  DB_HOST,
  DB_PORT,
  DB_NAME
} = require('./variables');

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

module.exports = MONGO_URL;

if (process.env.NODE_ENV !== 'production')
  require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_NAME = 'radiologger';
const DB_PORT = process.env.MONGO_PORT || 27017;
const DB_HOST = process.env.MONGO_HOST || '127.0.0.1';

module.exports = {
  PORT,
  DB_NAME,
  DB_PORT,
  DB_HOST
}

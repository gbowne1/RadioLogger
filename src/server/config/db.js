//Load .env variables
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}
console.log(process.env.MONGO_HOST);
const DB_NAME = 'radiologger';
const DB_PORT = process.env.MONGO_PORT || 27017;
const DB_HOST = process.env.MONGO_HOST || '127.0.0.1';
const MONGO_URL = process.env.MONGO_URL || `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

module.exports = MONGO_URL;

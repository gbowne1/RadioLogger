if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const SESSION_SECRET = process.env.SESSION_SECRET || '';
const API_SECRET = process.env.API_SECRET || '';

module.exports = {
  SESSION_SECRET,
  API_SECRET,
}

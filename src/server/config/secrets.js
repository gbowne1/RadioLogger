if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const SESSION_SECRET = process.env.SESSION_SECRET || '';

module.exports = {
  SESSION_SECRET
}

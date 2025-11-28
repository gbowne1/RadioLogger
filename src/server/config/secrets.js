if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// src/server/config/secrets.js
const SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET) {
    // In a critical config file, it's safer to require the secret exists
    console.error('SESSION_SECRET is not defined!');
    // If you can't exit here, at least provide a strong unique default
    // e.g., require('crypto').randomBytes(64).toString('hex') 
}
const API_SECRET = process.env.API_SECRET || 'some-safe-fallback-for-dev';

module.exports = {
  SESSION_SECRET,
  API_SECRET,
}

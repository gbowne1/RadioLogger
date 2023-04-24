if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const SECRET_SESSION = process.env.SECRET_SESSION || '';

module.exports = {
  SESSION_SECRET
}


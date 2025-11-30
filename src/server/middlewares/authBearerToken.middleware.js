const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const { API_SECRET } = require('../config/secrets')
const { find } = require('../services/auth.service');
const logger = require('../utils/logger');

const getToken = (authHeader) => {
  const bearer = authHeader.split(' ');
  const token = bearer[1];
  return token;
};

module.exports = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    next(boom.unauthorized('The request cannot be processed'));
    return;
  }

  const token = getToken(authHeader);
  try {
    const decode = jwt.verify(token, API_SECRET);
    const { email } = decode;
    const user = await find(email);
    req.userId = user._id;
    next();

  } catch (err) {
    next(boom.unauthorized('You are not authorized to access this resource'));
  }
};

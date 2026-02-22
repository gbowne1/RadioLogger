const boom = require('@hapi/boom');
const logger = require('../../utils/logger');

exports.show = (req, res, next) => {
  res.render('register');
};
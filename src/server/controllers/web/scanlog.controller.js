const boom = require('boom');
const logger = require('utils/logger');

exports.show = (req, res, next) => {
  res.render('scanlog/scanlog');
};

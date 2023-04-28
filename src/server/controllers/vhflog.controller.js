const boom = require('boom');
const logger = require('../utils/logger');
const vhflogService = require('../services/vhflog.service');

exports.show = (req, res, next) => {
  res.render('vhflog/vhflog');
}

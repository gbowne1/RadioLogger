const boom = require('boom');
const logger = require('../utils/logger');
const scanlogService = require('../services/scanlog.service');

exports.show = (req, res, next) => {
  res.render('scanlog/scanlog');
};

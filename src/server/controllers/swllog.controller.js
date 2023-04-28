const boom = require('boom');
const logger = require('../utils/logger');
//const swllogService = require();

exports.show = (req, res, next) => {
  res.render('swllog/swllog');
}



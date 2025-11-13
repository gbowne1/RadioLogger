const boom = require('@hapi/boom');
const logger = require('../../utils/logger');

exports.show = (req, res, next) => {
  res.render('login/login');
}

exports.destroy = (req, res, next) => {
  req.session.destroy();
  res.render('login/login');
};

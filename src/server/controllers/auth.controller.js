const boom = require('boom');
const authService = require('../services/auth.service');
const logger = require('../utils/logger');

exports.show = (req, res, next) => {
  res.render('login/login');
}

exports.login = (req, res, next) => {

}

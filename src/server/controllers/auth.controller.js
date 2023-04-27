const boom = require('boom');
const authService = require('../services/auth.service');
const logger = require('../utils/logger');


exports.showLogin = (req, res, next) => {
  res.render('public/login/login');
};

exports.login = (req, res, next) => {
  try {
    const {user, password} = req.body;
    logger.error(`${user} ${password}`);
    //const data = await auth(user, password);
  } catch(err) {
    next(boom.badRequest("Wrong username or password"));
  }
};

exports.showRegister = (req, res, next) => {

}

exports.register = async (req, res, next) => {
  try {
    const data = ({name, email, password} = req.body);
    const user = await authService.register(data);
    res.status(201).json({ data: user, statusCode: 201 });
  } catch(err) {
    next(boom.badRequest(err));
  }
};



const logger = require('../utils/logger');

exports.show = (req, res, next) => {
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


exports.register = (req, res, next) => {
  try {
    const {user, email, password} = req.body;

  } catch(err) {
    next(boom.badRequest('An error occurred while trying to register user data'));
  }
};


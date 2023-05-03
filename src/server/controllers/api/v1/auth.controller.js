const boom = require('boom');
const authService = require('@services/auth.service');

exports.login = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const data = await authService.login(email, password);
    res.status(200).json({statusCode: 200, data});
  } catch(err) {
    next(boom.unauthorized(err.message));
  }
}


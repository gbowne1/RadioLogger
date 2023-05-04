const boom = require('boom');
const jwt = require('jsonwebtoken');
const { API_SECRET } = require('@config/secrets');

const authService = require('@services/auth.service');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const isUser = await authService.login(email, password);
    if (isUser) {
      const accessToken = jwt.sign({
        email: isUser.email
      }, API_SECRET, {
        expiresIn: 86400
      });
      res.set('authorization', accessToken)
      res.json({ status: 'success', data: isUser, accessToken })
    }

  } catch (err) {
    next(boom.unauthorized(err.message));
  }
}


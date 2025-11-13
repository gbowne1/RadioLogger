const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const { API_SECRET } = require('../../../config/secrets');

const authService = require('../../../services/auth.service');

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const isUser = await authService.login(username, password);
    if (isUser) {
      req.session.auth = true
      const accessToken = jwt.sign({
        username: isUser.username
      }, API_SECRET, {
        expiresIn: 86400
      });
      res.set('authorization', accessToken)
      const { username, email } = isUser;
      res.json({ status: 'success', data: { username, email }, accessToken })
    }
  } catch (err) {
    next(boom.unauthorized(err.message));
  }
}

exports.resetPassword = async (req, res, next) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    await authService.resetPassword(email, oldPassword, newPassword);
    const data = { message: 'Password updated successfully' };
    res.status(200).json({ statusCode: 200, data });
  } catch (err) {
    next(boom.badRequest(err.message));
  }
}

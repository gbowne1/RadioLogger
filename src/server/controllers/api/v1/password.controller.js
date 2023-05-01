const boom = require('boom');
const authService = require('@services/auth.service');
const logger = require('@utils/logger');

exports.resetPassword = async (req, res, next) => {
  try {
    const {email, oldPassword, newPassword} = req.body;
    await authService.resetPassword(email, oldPassword, newPassword);
    const data = {message: 'Password updated successfully'};
    res.status(200).json({statusCode: 200, data});
  } catch(err) {
    next(boom.badRequest(err.message));
  }
}


const boom = require('@hapi/boom')
const logger = require('../../utils/logger')

exports.show = (req, res, next) => {
  try {
    res.render('profile/profile')
  } catch (err) {
    logger.error('Profile render error:', err)
    next(boom.badImplementation(err.message))
  }
}

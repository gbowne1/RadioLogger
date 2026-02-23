const boom = require('@hapi/boom')
const logger = require('../../utils/logger')

exports.show = (req, res, next) => {
  try {
    res.render('dashboard/dashboard')
  } catch (err) {
    logger.error('Dashboard render error:', err)
    next(boom.badImplementation(err.message))
  }
}

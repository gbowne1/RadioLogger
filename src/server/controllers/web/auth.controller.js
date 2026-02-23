const boom = require('@hapi/boom')
const logger = require('../../utils/logger')

exports.destroy = (req, res, next) => {
  try {
    req.session.destroy()
    res.render('login')
  } catch (err) {
    logger.error('Error destroying session:', err)
    next(boom.badImplementation(err.message))
  }
}

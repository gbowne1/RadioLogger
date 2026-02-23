const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')
const { API_SECRET } = require('../config/secrets')
const { find } = require('../services/auth.service')
const logger = require('../utils/logger')

const getToken = (authHeader) => {
  const bearer = authHeader.split(' ')
  return bearer[1]
}

module.exports = async (req, res, next) => {
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    logger.warn('Missing Authorization header')
    return next(boom.unauthorized('The request cannot be processed'))
  }

  const token = getToken(authHeader)

  try {
    const decode = jwt.verify(token, API_SECRET)
    const { email } = decode
    const user = await find(email)

    req.userId = user._id
    next()
  } catch (err) {
    logger.error('Invalid or expired token', err)
    next(boom.unauthorized('You are not authorized to access this resource'))
  }
}

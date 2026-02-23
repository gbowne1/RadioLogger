const crypto = require('crypto')
const PasswordReset = require('../models/passwordReset')
const User = require('./user.model')

function generateUniqueToken() {
  return crypto.randomBytes(32).toString('hex')
}

async function generateResetToken(userId) {
  try {
    const user = await User.findById(userId)
    if (!user) {
      throw new Error('User not found')
    }

    const resetToken = generateUniqueToken()

    const expirationTime = new Date()
    expirationTime.setHours(expirationTime.getHours() + 1)

    const passwordReset = new PasswordReset({
      userId,
      resetToken,
      expirationTime,
    })

    await passwordReset.save()

    return resetToken
  } catch (error) {
    throw new Error('Failed to generate a reset token')
  }
}

async function validateResetToken(resetToken) {
  try {
    const passwordReset = await PasswordReset.findOne({ resetToken })
    if (!passwordReset) {
      throw new Error('Invalid reset token')
    }

    if (passwordReset.used) {
      throw new Error('Reset token has been used')
    }

    if (new Date() > passwordReset.expirationTime) {
      throw new Error('Reset token has expired')
    }

    return passwordReset
  } catch (error) {
    throw new Error('Failed to validate reset token')
  }
}

async function markTokenAsUsed(resetToken) {
  try {
    const passwordReset = await PasswordReset.findOne({ resetToken })
    if (!passwordReset) {
      throw new Error('Invalid reset token')
    }

    passwordReset.used = true
    await passwordReset.save()

    return true
  } catch (error) {
    throw new Error('Failed to mark reset token as used')
  }
}

module.exports = {
  generateResetToken,
  validateResetToken,
  markTokenAsUsed,
}

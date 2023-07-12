// Assuming you are using Mongoose as the MongoDB ODM
const PasswordReset = require('../models/passwordReset');
const User = require('./user.model');

async function generateResetToken(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Generate a unique reset token (e.g., using a library like `crypto` or `uuid`)
    const resetToken = generateUniqueToken();

    // Set the expiration time (e.g., 1 hour from now)
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1);

    // Create a password reset entry in the database
    const passwordReset = new PasswordReset({ userId, resetToken, expirationTime });
    await passwordReset.save();

    // Return the reset token
    return resetToken;
  } catch (error) {
    throw new Error('Failed to generate a reset token');
  }
}

async function validateResetToken(resetToken) {
  try {
    const passwordReset = await PasswordReset.findOne({ resetToken });
    if (!passwordReset) {
      throw new Error('Invalid reset token');
    }

    if (passwordReset.used) {
      throw new Error('Reset token has been used');
    }

    const now = new Date();
    if (now > passwordReset.expirationTime) {
      throw new Error('Reset token has expired');
    }

    return passwordReset;
  } catch (error) {
    throw new Error('Failed to validate reset token');
  }
}

async function markTokenAsUsed(resetToken) {
  try {
    const passwordReset = await PasswordReset.findOne({ resetToken });
    if (!passwordReset) {
      throw new Error('Invalid reset token');
    }

    passwordReset.used = true;
    await passwordReset.save();

    return true;
  } catch (error) {
    throw new Error('Failed to mark reset token as used');
  }
}

module.exports = {
  generateResetToken,
  validateResetToken,
  markTokenAsUsed,
};

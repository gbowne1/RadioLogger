const boom = require('@hapi/boom')
const authService = require('../../../services/auth.service')
const bcrypt = require('bcrypt')
const User = require('../../../models/user')
const jwt = require('jsonwebtoken')

// -----------------------------
// Reset Password
// -----------------------------
exports.resetPassword = async (req, res, next) => {
  try {
    const { email, oldPassword, newPassword } = req.body
    await authService.resetPassword(email, oldPassword, newPassword)

    res.status(200).json({
      statusCode: 200,
      data: { message: 'Password updated successfully' },
    })
  } catch (err) {
    next(boom.badRequest(err.message))
  }
}

// -----------------------------
// Login
// -----------------------------
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        message:
          "Auth failed — either the account doesn't exist or the credentials are incorrect",
      })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(401).json({ message: 'Auth failed', token: null })
    }

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_KEY,
      { expiresIn: '1h' }
    )

    return res.status(200).json({
      message: 'Auth granted, welcome!',
      token,
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: err.message })
  }
}

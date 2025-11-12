const boom = require('@hapi/boom');
const authService = require('services/auth.service');
const logger = require('utils/logger');
const bcrypt = require('bcrypt');
const User = require('../../../models/user');
const jwt = require('jsonwebtoken');


exports.resetPassword = async (req, res, next) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    await authService.resetPassword(email, oldPassword, newPassword);
    const data = { message: 'Password updated successfully' };
    res.status(200).json({ statusCode: 200, data });
  } catch (err) {
    next(boom.badRequest(err.message));
  }
};

exports.login = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: "Auth failed!! either the account doesn't exist or you entered a wrong account" });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({ message: "Auth failed", token: null }); // Set token to null if there's an error
        }
        if (result) {
          const token = jwt.sign(
            { email: user.email, password: user.id },
            process.env.JWT_KEY,
            { expiresIn: "1h" }
          );
          res.status(200).json({ message: "Auth granted, welcome!", token: token });
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

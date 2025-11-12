const bcrypt = require('bcrypt');
const User = require('../models/user');
const { API_SECRET } = require('config/secrets');

exports.login = async (username, password) => {
  const user = await User.findOne({
    username: username
  });

  if (!user || !user.comparePassword(password)) {
    throw new Error('Authentication failed. Invalid user or password');
  }
  return (user)
}

exports.find = async (username) => {
  const user = await User.findOne({
    username: username
  });

  if (!user)
    throw new Error('Email not exists');

  return user;
}

exports.resetPassword = async (username, oldPassword, newPassword) => {
  const user = await User.findOne({
    username: username
  });
  if (!user || !user.comparePassword(oldPassword))
    throw new Error('Invalid user or password');

  user.password = bcrypt.hashSync(newPassword, 10);

  await user.save();
  return user;
}

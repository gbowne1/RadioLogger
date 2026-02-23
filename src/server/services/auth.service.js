const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.login = async (username, password) => {
  const user = await User.findOne({ username });

  console.log('auth.service login', username, password, 'found', user);

  if (!user || !user.comparePassword(password)) {
    const all = await User.find({});
    console.log('all', all);
    throw new Error('Authentication failed. Invalid user or password');
  }

  return user;
};

exports.find = async (username) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error('Email not exists');
  }

  return user;
};

exports.resetPassword = async (username, oldPassword, newPassword) => {
  const user = await User.findOne({ username });

  if (!user || !user.comparePassword(oldPassword)) {
    throw new Error('Invalid user or password');
  }

  user.password = bcrypt.hashSync(newPassword, 10);
  await user.save();

  return user;
};

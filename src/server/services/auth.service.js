const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('@models/user');
const {API_SECRET} = require('@config/secrets');

exports.login = async (email, password ) => {
  const user = await User.findOne({
    email: email
  });

  if(!user || !user.comparePassword(password)) {
    throw new Error('Authentication failed. Invalid user or password');
  }

  const accessToken = jwt.sign({
    email: user.email
  }, API_SECRET,{
    expiresIn: 86400
  });
  return ({accessToken});
}

exports.find = async(email) => {
  const user = await User.findOne({
    email: email
  });

  if(!user)
    throw new Error('Email not exists');

  return user;
}

exports.resetPassword = async(email, oldPassword, newPassword) => {
  const user = await User.findOne({
    email: email
  });
  if(!user || !user.comparePassword(oldPassword))
    throw new Error('Invalid user or password');

  user.password = bcrypt.hashSync(newPassword, 10);

  await user.save();
  return user;
}

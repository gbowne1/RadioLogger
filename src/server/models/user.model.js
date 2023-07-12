const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = require('./user.schema');

userSchema.methods.comparePassword = function (passwd) {
  return bcrypt.compareSync(passwd, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;

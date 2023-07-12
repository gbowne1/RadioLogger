const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const loginSchema = require('./login.schema');

loginSchema.methods.comparePassword = function(passwd) {
  return bcrypt.compareSync(passwd, this.password);
}

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;

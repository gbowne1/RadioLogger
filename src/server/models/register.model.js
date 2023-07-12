const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const registerSchema = require('../schemas/register.schema');

registerSchema.methods.comparePassword = function (passwd) {
  return bcrypt.compareSync(passwd, this.password);
}

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;

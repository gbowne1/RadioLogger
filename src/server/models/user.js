const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    default: 0,
    // We'll keep the followers 0 as the default value
  }
});

userSchema.methods.comparePassword = function (passwd) {
  return bcrypt.compareSync(passwd, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;

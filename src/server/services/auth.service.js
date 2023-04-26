const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register = (name, email, password) => {
  const user = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10)
  });

  user.save()
}

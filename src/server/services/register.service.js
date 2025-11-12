const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register = async (data) => {

  let emailExists = await User.findOne({ email: data.email });

  if (emailExists) {
    throw new Error("Error: Error the mail already exists");
  }
  const user = new User(data)
  user.password = bcrypt.hashSync(data.password, 10);


  await user.save()
  return { ...user._doc, password: null };
}

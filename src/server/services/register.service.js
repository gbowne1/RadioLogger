const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register = async (data) => {

  let emailExists = await User.findOne({email});

  if(emailExists){
    throw new Error("Error: Error the mail already exists");
  }
  const user = new User(data)
  user.password = bcrypt.hashSync(password, 10);


  await user.save()
  return user;
}

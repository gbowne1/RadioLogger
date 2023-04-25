module.auth = async (req, res, next) => {
  try {
    const {user, password} = req.body;
    const data = await auth(user, password);
  } catch(err) {
    next(boom.badRequest("Wrong username or password"));
  }
}



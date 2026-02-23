exports.show = (req, res, next) => {
  try {
    res.render('contestlog/contestlog')
  } catch (err) {
    next(err)
  }
}

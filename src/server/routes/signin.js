const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('public/login/login', { root: __dirname });
});

module.exports = router;


const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('public/dashboard/dashboard');
});

module.exports = router;


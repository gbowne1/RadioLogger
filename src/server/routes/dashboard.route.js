const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('dashboard/dashboard');
});

module.exports = router;

const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('public/login/login', { root: __dirname });
});

router.post('/', (req, res) => {

})
module.exports = router;

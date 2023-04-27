const { Router } = require('express');
const { showLogin, login } = require('../controllers/auth.controller');

const router = Router();

router.get('/', showLogin);

router.post('/', login);

module.exports = router;

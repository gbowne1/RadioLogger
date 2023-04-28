const { Router } = require('express');
const { show, login } = require('../controllers/auth.controller');

const router = Router();

router.get('/', show);

router.post('/', login);

module.exports = router;

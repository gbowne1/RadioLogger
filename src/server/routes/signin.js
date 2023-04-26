const { Router } = require('express');
const { show, auth } = require('../controllers/auth.controller');

const router = Router();

router.get('/', show);

router.post('/', auth);

module.exports = router;

const { Router } = require('express');
const { showRegister, register} = require('../controllers/auth.controller');

const router = Router();

router.get('/', showRegister);
router.post('/', register);

module.exports = router;

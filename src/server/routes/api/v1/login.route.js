const { Router } = require('express');
const { login, resetPassword } = require('@controllers/api/v1/auth.controller');

const router = Router();


router.post('/', login);

module.exports = router;

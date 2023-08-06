const { Router } = require('express');
const { login, resetPassword } = require('@controllers/api/v1/password.controller');
const authBearerToken = require('@middlewares/authBearerToken.middleware');

const router = Router();


router.post('/reset', authBearerToken, resetPassword);
router.post('/login', login);

module.exports = router;

const { Router } = require('express');
const { login, resetPassword } = require('@controllers/api/v1/password.controller');
const isAuth = require('@middlewares/isAuth.middleware');

const router = Router();


router.post('/reset', isAuth, resetPassword);

module.exports = router;


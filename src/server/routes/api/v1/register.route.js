const { Router } = require('express');
const { register} = require('@controllers/api/v1/register.controller');

const router = Router();

router.post('/', register);

module.exports = router;

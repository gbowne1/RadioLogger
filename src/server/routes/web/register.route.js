const { Router } = require('express');
const { show } = require('../../controllers/web/register.controller');

const router = Router();

router.get('/', show);

module.exports = router;

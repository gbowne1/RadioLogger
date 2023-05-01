const { Router } = require('express');
const { show } = require('@controllers/web/dashboard.controller');

const router = Router();

router.get('/', show);

module.exports = router;

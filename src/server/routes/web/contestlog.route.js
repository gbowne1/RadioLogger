const { Router } = require('express');
const { show } = require('@controllers/web/contestlog.controller');

const router = Router();

router.get('/', show);

module.exports = router;

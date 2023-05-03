const { Router } = require('express');
const { show } = require('@controllers/web/hamlog.controller');

const router = Router();

router.get('/', show);

module.exports = router;

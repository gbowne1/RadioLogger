const { Router } = require('express');
const { show } = require('@controllers/web/profile.controller');

const router = Router();

router.get('/', show);

module.exports = router;

const { Router } = require('express');
const { show } = require('../controllers/swllog.controller');

const router = Router();

router.get('/', show);

module.exports = router;

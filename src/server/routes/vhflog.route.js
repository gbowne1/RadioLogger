const { Router } = require('express');
const { show } = require('../controllers/vhflog.controller');

const router = Router();

router.get('/', show);

module.exports = router;

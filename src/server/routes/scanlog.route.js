const { Router } = require('express');
const { show } = require('../controllers/scanlog.controller');

const router = Router();

router.get('/', show);

module.exports = router;

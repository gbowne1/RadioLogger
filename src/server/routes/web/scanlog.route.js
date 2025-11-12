const { Router } = require('express');
const { show } = require('controllers/web/scanlog.controller');

const router = Router();

router.get('/', show);

module.exports = router;

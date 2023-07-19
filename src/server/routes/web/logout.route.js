const { Router } = require('express');
const { destroy } = require('@controllers/web/auth.controller');

const router = Router();

router.get('/', destroy);

module.exports = router;

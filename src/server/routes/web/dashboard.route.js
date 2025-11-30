const { Router } = require('express');
const { show } = require('../../controllers/web/dashboard.controller');
const authSession = require('../../middlewares/authSession.middleware');

const router = Router();

router.get('/', authSession, show);

module.exports = router;

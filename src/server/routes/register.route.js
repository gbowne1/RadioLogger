const { Router } = require('express');
const { show, register} = require('../controllers/register.controller');

const router = Router();

router.get('/', show);
router.post('/', register);

module.exports = router;

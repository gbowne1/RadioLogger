const { Router } = require('express');

const router = Router();

router.get('/', show);
router.post('/', register);

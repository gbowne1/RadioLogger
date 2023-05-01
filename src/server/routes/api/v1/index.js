const express = require('express');
const router = express.Router();

const registerRoute = require('./register.route');
const loginRoute = require('./login.route');
const passwordRoute = require('./password.route');
/*---   add another routes files here   ---*/

router.use('/register', registerRoute);
router.use('/login', loginRoute);
router.use('/password', passwordRoute);

module.exports = router;

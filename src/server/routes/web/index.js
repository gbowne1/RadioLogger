const express = require('express');
const router = express.Router();

const registerRoute = require('./register.route');
const loginRoute = require('./login.route');
const dashboardRoute = require('./dashboard.route');
const swllogRoute = require('./swllog.route');
const vhflogRoute = require('./vhflog.route');
const scanlogRoute = require('./scanlog.route');
const contestlogRoute = require('./contestlog.route');
const hamlogRoute = require('./hamlog.route');

router.use('/register', registerRoute);
router.use('/login', loginRoute);
router.use('/dashboard', dashboardRoute);
router.use('/vhflog', vhflogRoute);
router.use('/swllog', swllogRoute);
router.use('/scanlog', scanlogRoute);
router.use('/contestlog', contestlogRoute);
router.use('/hamlog', hamlogRoute);

module.exports = router;

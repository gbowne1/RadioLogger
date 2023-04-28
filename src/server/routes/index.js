const express = require('express');

const registerRoute = require('./register.route');
const loginRoute = require('./login.route');
const dashboardRoute = require('./dashboard.route');
const swllogRoute = require('./swllog.route');
const vhflogRoute = require('./vhflog.route');
const scanlogRoute = require('./scanlog.route');
/*---   add another routes files here   ---*/

module.exports = (app) => {
  app.use('/register', registerRoute);
  app.use('/login', loginRoute);
  app.use('/dashboard', dashboardRoute);
  app.use('/vhflog', vhflogRoute);
  app.use('/swllog', swllogRoute);
  app.use('/scanlog', scanlogRoute);
}

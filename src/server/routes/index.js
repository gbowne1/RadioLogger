const express = require('express');

const registerRoutes = require('./register.routes');
const loginRoutes = require('./login.routes');
const dashboardRoutes = require('./dashboard.routes');
/*---   add another routes files here   ---*/

module.exports = (app) => {
  app.use('/register', registerRoutes);
  app.use('/login', loginRoutes);
  app.use('/dashboard', dashboardRoutes);
}

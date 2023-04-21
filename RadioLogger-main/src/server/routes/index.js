const express = require('express');

const dashboardRouter = require('./dashboard.js');
const signinRouter = require('./signin.js');
/*---   add another routes files here   ---*/

module.exports = (app) => {
  app.use('/dashboard', dashboardRouter);
  app.use('/signin', signinRouter);
}

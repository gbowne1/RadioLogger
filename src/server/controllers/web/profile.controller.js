const boom = require('boom');
const logger = require('utils/logger');


exports.show = (req, res, next) => {
    res.render('profile/profile');
};
// Client side routing of the profile



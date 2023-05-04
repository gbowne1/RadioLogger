const boom = require('boom');
const registerService = require('@services/register.service');
const logger = require('@utils/logger');


exports.register = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await registerService.register({ ...data });
    res.status(201).json({ data: user, statusCode: 201 });
  } catch (err) {
    next(boom.badRequest(err,));

  }
};



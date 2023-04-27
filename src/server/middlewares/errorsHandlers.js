const boom = require('boom');

const env = process.env.NODE_ENV || 'development';

const withErrorStack = (message, err, stack) =≥ {
  if(env === 'development') {
    return {...err, message, stack};
  }
  return err;
}

exports.wrapErrors = (err, req, res, next) => {
  if(!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

exports.errorHandler = (err, req, res, next) => {
  const { output: { statusCode, payload}, message} = err;

  if(res.headersSent) {
    next(err);
  }
  res.status(statusCode).json(withErrorStack(message, payload, err.stack));
}

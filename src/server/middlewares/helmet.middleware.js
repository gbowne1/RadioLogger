const helmet = require('helmet');

const directives = {
  defaultSrc: ["'self'"],
  scriptSrc: [
    "'self'",
    "'unsafe-inline'",
    "https://cdnjs.cloudflare.com",
  ],
  styleSrc: [
    "'self'",
    "'unsafe-inline'",
    "https://cdnjs.cloudflare.com",
    "https://fonts.googleapis.com",
  ],
  fontSrc: [
    "'self'",
    "https://fonts.gstatic.com",
    "https://cdnjs.cloudflare.com",
    "data:"
  ],
  imgSrc: [
    "'self'",
    "https://via.placeholder.com",
    "data:",
    "blob:",
    "https://i.stack.imgur.com"

  ],
  connectSrc: [
    "'self'",
    "https://cdnjs.cloudflare.com"
  ]
}

module.exports = helmet({
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" },
  contentSecurityPolicy: {
    directives: directives,
  },
})

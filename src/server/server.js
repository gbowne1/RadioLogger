require('module-alias/register');
const apiRoute = require('@routes/api');
const webRoute = require('@routes/web');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const db = require('./utils/database');
const session = require('@middlewares/session.middleware');
const morgan = require('@middlewares/morgan.middleware');
const helmet = require('@middlewares/helmet.middleware');
const app = express();
const logger = require('@utils/logger');
const { wrapErrors, errorHandler } = require('@middlewares/errorsHandlers.middleware');

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Middleware setup
app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(cookieSession({
  name: 'session',
  keys: ['x', 'y']
}));
app.use(session);
app.use(morgan);
app.use(helmet);


// Database connection
db.connect();

// Set view engine to HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../client/public'));

//static files
app.use(express.static(path.join(__dirname, '../client/public')));

// Routes
app.use('/api', apiRoute);
app.use('/', webRoute);

app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

// 404 Not Found
app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.use(wrapErrors);
app.use(errorHandler);

// Listen on port 3000 or the next available port
const server = app.listen(3000, () => {
  logger.info(`Server is listening on port: ${server.address().port}`);
});

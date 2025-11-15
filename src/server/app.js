const apiRoute = require('./routes/api');
const webRoute = require('./routes/web');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./utils/database');
const session = require('./middlewares/session.middleware');
const morgan = require('./middlewares/morgan.middleware');
const helmet = require('./middlewares/helmet.middleware');
const app = express();
const { wrapErrors, errorHandler} = require('./middlewares/errorsHandlers.middleware');

console.log('app.js, setting up middleware...');

// Middleware setup
app.use(cors(/*{ credentials: true, origin: true }*/));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
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

// 404 Not Found
app.use('*splat', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.use(wrapErrors);
app.use(errorHandler);

console.log('app.js done.');

module.exports = app

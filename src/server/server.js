const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt');
const db = require('./utils/database');
const session = require('./middlewares/session.middleware');
const morgan = require('./middlewares/morgan.middleware');
const helmet = require('./middlewares/helmet.middleware');
const routes = require('./routes/index.js');
const app = express();
const logger = require('./utils/logger');
const User = require('./user');
const bcryptSalt = 10; // Define the number of salt rounds

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// Middleware setup
app.use(cors({ credentials: true, origin: true }));
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
routes(app);

app.get('/contestlog', (req, res) => { /* ... */ });

app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

app.post('/reset-password', async (req, res) => {
  const email = req.body.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

  if (!isPasswordValid) {
    res.status(400).json({ message: 'Incorrect old password' });
    return;
  }

  const hashedNewPassword = await bcrypt.hash(newPassword, Number(bcryptSalt));
  await User.updateOne({ _id: user._id }, { $set: { password: hashedNewPassword } });

  res.status(200).json({ message: 'Password reset successful' });
});

// 404 Not Found
app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

// Listen on port 3000 or the next available port
const server = app.listen(3000, () => {
  logger.info(`Server is listening on port: ${server.address().port}`);
});

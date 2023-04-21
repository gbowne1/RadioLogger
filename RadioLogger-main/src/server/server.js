const express = require('express');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const passport = require('passport');
const MONGO_URL = require('./config/db.js');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const routes = require('./routes/index.js');
const app = express();

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
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));
app.use(morgan('combined'));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "https://cdnjs.cloudflare.com",
          "'sha256-3hJxKkQr_PLil1YTgO1yE1IN5eJU88If3lZf7-4ey_Q='",
          // Add other external script sources here
        ],
        styleSrc: [
          "'self'",
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/",
          // Add external style sources here
        ],
        // Add other directives as needed
      },
    },
  })
);

// Database connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Set view engine to HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../client'));

//static files
app.use(express.static(path.join(__dirname, '../client/public')));

// Routes
routes(app);

app.get('/contestlog', (req, res) => { /* ... */ });
app.get('/scanlog', (req, res) => { /* ... */ });
app.get('/swllog', (req, res) => { /* ... */ });
app.get('/hamlog', (req, res) => { /* ... */ });
app.get('/signup', (req, res) => { /* ... */ });
app.get('/mwlog', (req, res) => { /* ... */ });
app.get('/vhflog', (req, res) => { /* ... */ });
app.get('/auth', cors(), (req, res) => { /* ... */ });
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

// User schema for demonstration purposes
const users = [];

app.post('/auth', cors(), async (req, res) => {
  const user = users.find(u => u.email === req.body.email);
  if (user == null) {
    return res.status(400).send('User not found');
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      res.status(401).send('Invalid password');
    }
  } catch {
    res.status(500).send('Error during authentication');
  }
});

app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { email: req.body.email, password: hashedPassword };
    users.push(user);
    res.status(201).send('User created');
  } catch {
    res.status(500).send('Error creating user');
  }
});

app.post('/signin', (req, res) => {
  res.header('Content-type', 'text/html');
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
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
  console.log(`Server is listening on port: ${server.address().port}`);
});

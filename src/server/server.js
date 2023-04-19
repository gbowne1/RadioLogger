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

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));
app.use(morgan('combined'));
app.use(helmet());

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

// Routes
app.get('/dashboard', (req, res) => { /* ... */ });
app.get('/contestlog', (req, res) => { /* ... */ });
app.get('/scanlog', (req, res) => { /* ... */ });
app.get('/swllog', (req, res) => { /* ... */ });
app.get('/signin', (req, res) => { /* ... */ });
app.get('/hamlog', (req, res) => { /* ... */ });
app.get('/signup', (req, res) => { /* ... */ });
app.get('/mwlog', (req, res) => { /* ... */ });
app.get('/vhflog', (req, res) => { /* ... */ });
app.get('/signin/login', (req, res) => { /* ... */ });
app.get('/auth', (req, res) => { /* ... */ });
app.get('/logout', (req, res) => { /* ... */ });

// User schema for demonstration purposes
const users = [];

app.post('/auth', async (req, res) => {
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

// 404 Not Found
app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

// Listen on port 3000 or the next available port
const server = app.listen(3000, () => {
  console.log(`Server is listening on port: ${server.address().port}`);
});

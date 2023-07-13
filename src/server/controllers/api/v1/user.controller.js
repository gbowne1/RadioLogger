const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true });

app.use(express.json());

app.get('/users', (req, res) => {
  User.find((err, docs) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving users');
    } else {
      res.status(200).send(docs);
    }
  });
});

app.post('/users', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  newUser.save((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error creating user');
    } else {
      res.status(201).send(user);
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
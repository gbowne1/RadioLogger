const chai = require('chai');
const chaiHttp = require('chai-http');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = require('../app');
const User = require('../models/user');

chai.use(chaiHttp);
chai.should();

describe('Authentication', () => {
  describe('POST /login', () => {
    it('should return a valid JWT token for valid user credentials', async () => {
      // Create a test user
      const password = await bcrypt.hash('password', 10);
      const user = await User.create({ name: 'John Doe', email: 'johndoe@example.com', password });

      // Send a POST request to /login with valid user credentials
      const res = await chai.request(app)
        .post('/login')
        .send({ email: 'johndoe@example.com', password: 'password' });

      // Verify that the response contains a valid JWT token
      res.should.have.status(200);
      res.body.should.have.property('token');
      const decodedToken = jwt.verify(res.body.token, process.env.JWT_SECRET);
      decodedToken.should.have.property('userId', user.id);
    });
  });

  describe('POST /logout', () => {
    it('should clear the session cookie', async () => {
      // Send a POST request to /logout
      const res = await chai.request(app).post('/logout');

      // Verify that the response clears the session cookie
      res.should.have.status(200);
      res.headers.should.not.have.property('set-cookie');
    });
  });
});

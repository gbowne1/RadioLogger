const chai = require('chai');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');
const app = require('../app');
const User = require('../models/user');

chai.use(chaiHttp);
chai.should();

describe('Authorization', () => {
  describe('GET /profile', () => {
    it('should return the user profile for an authenticated user', async () => {
      // Create a test user and generate a JWT token
      const user = await User.create({ name: 'John Doe', email: 'johndoe@example.com', password: 'password' });
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

      // Send a GET request to /profile with the JWT token
      const res = await chai.request(app)
        .get('/profile')
        .set('Authorization', `Bearer \${token}`);

      // Verify that the response contains the user profile
      res.should.have.status(200);
      res.body.should.have.property('name', 'John Doe');
      res.body.should.have.property('email', 'johndoe@example.com');
    });

    it('should redirect to /login for an unauthenticated user', async () => {
      // Send a GET request to /profile without a JWT token
      const res = await chai.request(app).get('/profile');

      // Verify that the response redirects to /login
      res.should.have.status(302);
      res.headers.should.have.property('location').that.includes('/login');
    });
  });
});

const chai = require('chai');
const app = require('app');

describe('POST /register', () => {
  it('should create a new user for valid user data', (done) => {
    chai.request(app)
      .post('/register')
      .send({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message');
        res.body.message.should.equal('User created successfully');
        // Verify that user is added to database
        // ...
        done();
      });
  });
});

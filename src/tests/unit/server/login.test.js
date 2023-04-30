const chai = require('chai');
const app = require('app');
describe('POST /login', () => {
  it('should return a valid JWT token for valid user credentials', (done) => {
    chai.request(app)
      .post('/login')
      .send({ email: 'user@example.com', password: 'password' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('token');
        const token = res.body.token;
        // Verify that token is valid
        // ...
        done();
      });
  });
});

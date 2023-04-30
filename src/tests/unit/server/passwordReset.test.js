const chai = require('chai');
const app = require('app');

describe('POST /password-reset', () => {
  it('should send a password reset email for valid email address', (done) => {
    chai.request(app)
      .post('/password-reset')
      .send({ email: 'user@example.com' })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message');
        res.body.message.should.equal('Password reset email sent');
        done();
      });
  });
});

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../src/server/server.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Server', () => {
  it('should respond with status 200 on the root route', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });
});

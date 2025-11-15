const app = require('./app');
const logger = require('./utils/logger');
const { PORT } = require('./config/variables');

const server = app.listen(PORT, '0.0.0.0', error => {
  if (error) {
    throw error;
  }
  logger.info(`Server is listening on port: ${server.address().port}`);
});

console.log(`server.js, server: ${JSON.stringify(server)}`);

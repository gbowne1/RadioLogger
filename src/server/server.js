const app = require('./app');
const logger = require('@utils/logger');
const { PORT } = require('@config/variables');

function findAvailablePort(startPort, endPort) {
  for (let port = startPort; port <= endPort; port++) {
    try {
      const server = net.createServer();
      server.listen(port);
      server.close(); // Immediately close the connection
      return port;
    } catch (error) {
      if (error.code === 'EADDRINUSE') {
        // Port already in use, continue looping
      } else {
        throw error; // Re-throw unexpected errors
      }
    }
  }
  throw new Error('No available port found in the specified range');
}

const server = app.listen(PORT, () => {
  logger.info(`Server is listening on port: ${server.address().port}`);
});

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Create an Express app
const app = express();

// Set up mongoose connection
mongoose.set("strictQuery", false);
const mongoDB = "insert_your_database_url_here";
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port \${PORT}`);
});

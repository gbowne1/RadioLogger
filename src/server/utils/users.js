const mongoose = require('mongoose');

// Replace with your actual MongoDB connection string
const MONGO_URI = 'mongodb://localhost:27017/radiologger';

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Function to create a test user
async function createTestUser(username, password) {
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    console.log('User already exists:', existingUser.username);
    return;
  }

  const newUser = new User({ username, password });

  try {
    await newUser.save();
    console.log('Test user created successfully:', newUser.username);
  } catch (err) {
    console.error('Error creating user:', err.message);
  }
}

// Function to list all users
async function listUsers() {
  const users = await User.find();
  if (users.length === 0) {
    console.log('No users found in the database.');
  } else {
    console.log('List of users:');
    users.forEach(user => console.log(user.username));
  }
}

// Example usage
createTestUser('test_user', 'secure_password'); // Replace with your desired username and password

// Uncomment to list all users
// listUsers();

// Close the connection before exiting
mongoose.connection.once('close', () => {
  console.log('Mongoose connection closed');
});

// Handle exit signals (optional)
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection closed on exit');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection closed on termination');
    process.exit(0);
  });
});

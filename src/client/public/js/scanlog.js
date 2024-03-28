// Import Mongoose and the ScanLog model
const mongoose = require('mongoose');
const ScanLog = require('./models/scanlog');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/radiologger', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Get the form element and add an event listener to the submit button
const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const formData = new FormData(form);
  const frequency = formData.get('frequency');
  const callSign = formData.get('callSign');
  const tone = formData.get('tone');
  const description = formData.get('description');
  const mode = formData.get('mode');
  const toneType = formData.get('toneType');
  const location = formData.get('location');
  const systemType = formData.get('systemType');
  const systemId = formData.get('systemId');
  // Handle talkgroups as an array if applicable
  const talkgroups = formData.getAll('talkgroups'); // Assuming checkboxes/multi-select
  const tag = formData.get('tag');
  const systemFrequencies = formData.get('systemFrequencies');
  const repeaters = formData.get('repeaters');

  try {
    // Create a new ScanLog document
    const scanLog = new ScanLog({
      frequency,
      callSign,
      tone,
      description,
      mode,
      toneType,
      location,
      systemType,
      systemId,
      talkgroups, // Assuming array handling
      tag,
      systemFrequencies,
      repeaters
    });

    // Save the document to the database
    await scanLog.save();
    console.log('ScanLog saved to database');
    form.reset(); // Reset the form
    // Consider adding user feedback for success (e.g., alert)
  } catch (err) {
    console.error('Error saving ScanLog to database', err);
    // Consider user feedback for errors (e.g., alert)
  }
});

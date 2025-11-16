'use strict';

// Import Mongoose and the ScanLog model
// const mongoose = require('mongoose');
// const ScanLog = require('./models/scanlog');

// // Connect to the MongoDB database
// mongoose.connect('mongodb://localhost:27017/radiologger', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(function() {
//   console.log('Connected to MongoDB');
// })
// .catch(function(err) {
//   console.error('Error connecting to MongoDB', err);
// });


// Get the form element and add an event listener to the submit button
function initScanLog() {
  const form = document.getElementById('scanlog_form');
  if (!form) {
    console.warn('Scan log form not found');
    return;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);
    const scanLogData = {
      frequency: formData.get('frequency'),
      callSign: formData.get('callSign'),
      tone: formData.get('tone'),
      description: formData.get('description'),
      mode: formData.get('mode'),
      toneType: formData.get('toneType'),
      location: formData.get('location'),
      systemType: formData.get('systemType'),
      systemId: formData.get('systemId'),
      talkgroups: formData.getAll('talkgroups'), // Assuming checkboxes/multi-select
      tag: formData.get('tag'),
      systemFrequencies: formData.get('systemFrequencies'),
      repeaters: formData.get('repeaters')
    };

    alert('todo: save via server call');

    // Create a new ScanLog document
    // const scanLog = new ScanLog(scanLogData);

    // // Save the document to the database
    // scanLog.save()
    //   .then(function() {
    //     console.log('ScanLog saved to database');
    //     form.reset(); // Reset the form
    //     alert('Scan log saved successfully!'); // User feedback
    //   })
    //   .catch(function(err) {
    //     console.error('Error saving ScanLog to database', err);
    //     alert('Error saving scan log: ' + err.message); // User feedback
    //   });
  }

  form.addEventListener('submit', handleSubmit);
}

export { initScanLog };


function initSwlLog() {
  const getById = id => document.getElementById(id);

  const submitButton = getById("swllog_submit");
  if (!submitButton) {
    return;
  }

  function submitLog() {
    const date = getById('date').value;
    const time = getById('time').value;
    const frequency = getById('frequency').value;
    const station = getById('station').value;
    const location = getById('location').value;
    const band = getById('band').value;
    const mode = getById('mode').value;
    const comments = getById('comments').value;

    // Add the new log entry to the table
    const tbody = document.querySelector('#logTable tbody');
    tbody.innerHTML =
      `<tr>
        <td>${date} ${time}</td>
        <td>${frequency} kHz</td>
        <td>${station}</td>
        <td>${location}</td>
        <td>${band}</td>
        <td>${mode}</td>
        <td>${comments}</td>
        <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
      </tr>` + tbody.innerHTML;

    // Clear form inputs
    document.querySelectorAll('input, textarea').forEach(el => el.value = '');
  }

  submitButton.addEventListener('click', submitLog);

}

export { initSwlLog };

// // Dummy API call to fetch station contacts (replace with real API in production)
// function fetchStationContacts(query) {
//   const contacts = [
//     { id: 1, name: "BBC World Service", location: "London, UK", contact: "info@bbc.com" },
//     { id: 2, name: "Voice of America", location: "Washington, DC", contact: "contact@voa.com" },
//     { id: 3, name: "Radio Free Europe", location: "Prague, Czech Republic", contact: "rfe@rferl.org" }
//   ];

//   return contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()));
// }

// // Handle log deletion
// $(document).on('click', '.delete-btn', function () {
//   $(this).closest('tr').remove();
// });

// // Search function for logs
// function searchLogs() {
//   const query = $('#searchInput').val().toLowerCase();
//   $('#logTable tbody tr').each(function () {
//     const row = $(this);
//     let found = false;

//     row.find('td').each(function () {
//       if ($(this).text().toLowerCase().includes(query)) {
//         found = true;
//       }
//     });

//     row.toggle(found);
//   });
// }

// // Initialize dynamic station contacts
// $('#station').on('input', function () {
//   const query = $(this).val();
//   const results = fetchStationContacts(query);
//   const resultsContainer = $('#stationResults');
//   resultsContainer.empty();

//   results.forEach(contact => {
//     resultsContainer.append(`
//       <div class="list-group-item list-group-item-action" data-id="${contact.id}">
//         ${contact.name} - ${contact.location}
//       </div>
//     `);
//   });
// });

// $(document).on('click', '.list-group-item', function () {
//   const selectedContact = $(this).text();
//   $('#station').val(selectedContact);
//   $('#stationResults').empty();
// });

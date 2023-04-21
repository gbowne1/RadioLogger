// /src/client/app.js
document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('data-entry-form');

	form.addEventListener('submit', async (e) => {
	  e.preventDefault();

	  const dataField = document.getElementById('data-field');
	  const data = dataField.value;

	  // TODO: Send data to the server and save it in the database

	  // Clear the input field after submission
	  dataField.value = '';
	});
  });
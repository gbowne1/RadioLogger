document.addEventListener('DOMContentLoaded', () => {
  const logForm = document.querySelector('#log-form');
  logForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
      callsign: document.querySelector('#callsign').value,
      frequency: document.querySelector('#frequency').value,
      mode: document.querySelector('#mode').value
    };
    fetch('/vhflog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log('There was a problem with the fetch operation:', error);
      });
  });
});
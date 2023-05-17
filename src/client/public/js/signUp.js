const form = document.getElementById('signup-form');

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const reenterPassword = document.getElementById('reenter-password').value;

  // perform validation checks
  if (name === '' || email === '' || password === '' || reenterPassword === '') {
    alert('Please fill in all fields.');
    return false;
  }

  if (password !== reenterPassword) {
    alert('Passwords do not match.');
    return false;
  }

  return true;
}

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const reenterPassword = document.getElementById('reenter-password').value;

  // perform validation checks
  if (name === '' || email === '' || password === '' || reenterPassword === '') {
    alert('Please fill in all fields.');
    return;
  }

  if (password !== reenterPassword) {
    alert('Passwords do not match.');
    return;
  }

  // create an object with the form data
  const data = {
    name: name,
    email: email,
    password: password
  };

  const response = await fetch('/api/v1/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.status === 201) {
    // Redirect the user to a success page
    window.location.href = '/dashboard'; // This could be replaced with /dashboard
  } else {
    const data = await response.json();
    alert(data.message);
  }
});

const form = document.getElementById('signup-form');

async function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const reenterPassword = document.getElementById('reenter-password').value;

  // Perform validation checks once
  if (!name || !email || !password || !reenterPassword) {
    alert('Please fill in all fields.');
    return;
  }

  if (password !== reenterPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Create data object and send request
  const data = {
    username: name,
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
    window.location.href = '/dashboard';
  } else {
    const data = await response.json();
    alert(data.message);
  }
}

form.addEventListener('submit', handleSubmit);

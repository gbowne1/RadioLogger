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


form.addEventListener('submit', function (event) {
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

  // make a fetch request to the server
  fetch('/api/v1/user.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        alert('Signup successful!');
        //   window.location.href = '/dashboard';
      } else {
        throw new Error('Signup failed.');
        console.log(response)
      }
    })
    .catch(error => {
      console.error(error);
      alert('Signup failed.');
    });
});

document.querySelector('form[action="signUp.js"]').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const username = form.uname.value;
  const email = form.email.value;
  const password = form.pass.value;
  const passwordConfirm = form.pass_confirm.value;

  if (password !== passwordConfirm) {
    alert('Passwords do not match.');
    return;
  }

  const response = await fetch('/api/v1/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  });

  if (response.ok) {
    console.log('User registered:', { username, email, password });
    // Redirect the user to a success page
    window.location.href = '/success'; // This could be replaced with /dashboard
  } else {
    const data = await response.json();
    alert(data.message);
  }
});

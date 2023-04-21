document.querySelector('form[action="signUp.js"]').addEventListener('submit', function (e) {
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

  // Perform your sign-up logic here (e.g., AJAX call to the server)

  console.log('User registered:', { username, email, password });
});

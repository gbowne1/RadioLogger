document.querySelector('form[action="signIn.js"]').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const password = form.pass.value;
  const keepLoggedIn = form.terms.checked;

  // Perform your sign-in logic here (e.g., AJAX call to the server)

  console.log('User logged in:', { email, password, keepLoggedIn });
});

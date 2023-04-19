document.querySelector('form[action="resetPassword.js"]').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const oldPassword = form.pass_old.value;
  const newPassword = form.pass_new.value;

  // Perform your password reset logic here (e.g., AJAX call to the server)

  console.log('Password reset:', { email, oldPassword, newPassword });
});

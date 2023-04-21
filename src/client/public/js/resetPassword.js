document.querySelector('form[action="resetPassword.js"]').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const oldPassword = form.pass_old.value;
  const newPassword = form.pass_new.value;

  $.ajax({
    type: 'POST',
    url: '/reset-password',
    data: {
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword
    },
    success: function (response) {
      // Handle success, e.g., display a success message
      console.log(response);
    },
    error: function (error) {
      // Handle error, e.g., display an error message
      console.log(error);
    }
  });
});

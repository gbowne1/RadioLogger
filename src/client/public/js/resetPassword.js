function initPasswordReset() {
  const form = document.querySelector('form[action="resetPassword.js"]');

  if (!form) {
    console.warn('Password reset form not found');
    return;
  }

  function handlePasswordReset(e) {
    e.preventDefault();

    const formData = {
      email: form.email.value,
      oldPassword: form.pass_old.value,
      newPassword: form.pass_new.value
    };

    fetch('/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      if (response.ok) {
        return response.json().then(function(data) {
          console.log('Password reset successful:', data.message);
          // You could display the success message to the user
          // For example:
          alert(data.message || 'Password successfully reset');
          // window.location.href = '/login';
        });
      } else {
        return response.json().then(function(data) {
          throw new Error(data.message || 'Failed to reset password');
        });
      }
    })
    .catch(function(error) {
      console.error('Password reset failed:', error.message);
      // Display error to user
      alert(error.message);
    });
  }

  form.addEventListener('submit', handlePasswordReset);
}

document.addEventListener('DOMContentLoaded', initPasswordReset);

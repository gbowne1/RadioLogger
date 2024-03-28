document.querySelector('form[action="resetPassword.js"]').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const oldPassword = form.pass_old.value;
  const newPassword = form.pass_new.value;

  try {
    const response = await fetch('/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        oldPassword,
        newPassword
      })
    });

    if (response.ok) {
      // Handle success, e.g., display a success message
      console.log('Password reset successful');
      // Consider redirecting to login or displaying a success message
    } else {
      // Handle error, e.g., display an error message based on response
      const errorData = await response.json();
      console.error('Error resetting password:', errorData.message);
      // Display a user-friendly error message based on the error response
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle network errors or other unexpected issues
  }
});
